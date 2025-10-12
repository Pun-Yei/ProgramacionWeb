from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HideView(APIView):
    def post(self, request):
        return Response({"message": "HideView OK"}, status=status.HTTP_200_OK)

class RevealView(APIView):
    def get(self, request):
        return Response({"message": "RevealView OK"}, status=status.HTTP_200_OK)
