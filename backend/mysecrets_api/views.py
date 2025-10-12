from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import secrets
from django.conf import settings

class HideView(APIView):
    def post(self, request):
        secret = request.data.get("secret", "")
        if not secret or len(secret) > 2000:
            return Response({"error":"Secreto inválido"}, status=status.HTTP_400_BAD_REQUEST)

        # Generar key y guardarla con SET NX para evitar colisiones
        for _ in range(5):
            key = secrets.token_urlsafe(8)
            # intenta insertar solo si no existe
            inserted = settings.REDIS.set(name=f"secret:{key}", value=secret, nx=True)
            if inserted:
                return Response({"key": key}, status=status.HTTP_201_CREATED)
        return Response({"error":"No se pudo generar key única"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RevealView(APIView):
    def get(self, request, key):
        r = settings.REDIS
        redis_key = f"secret:{key}"

        # Intentar GETDEL si se puede
        try:
            value = r.execute_command("GETDEL", redis_key)
        except Exception:
            # llamada de Lua
            lua = """
            local val = redis.call('GET', KEYS[1])
            if val then redis.call('DEL', KEYS[1]) end
            return val
            """
            fn = r.register_script(lua)
            value = fn(keys=[redis_key])

        if value:
            return Response({"secret": value}, status=status.HTTP_200_OK)
        else:
            return Response({"error":"Secreto no encontrado o ya revelado"}, status=status.HTTP_404_NOT_FOUND)
