from django.db import models


class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.PositiveIntegerField()
    pais = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Libro(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    paginas = models.PositiveIntegerField()

    def __str__(self):
        return self.titulo

