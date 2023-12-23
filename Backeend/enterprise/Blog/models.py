from typing import Any
from django.db import models

class Blog(models.Model):
    titulo=models.CharField(max_length=100)
    subtitulo=models.CharField(max_length=500)
    fecha=models.DateField()
    autor=models.CharField(max_length=120)
    descripcion=models.TextField(max_length=None)
    imagen=models.ImageField(upload_to='blog',null=True)
    link=models.CharField(max_length=100,null=True)
    def __str__(self):
        return self.titulo+" "+self.subtitulo

