from django.db import models


class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.PositiveIntegerField()
    pais = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

