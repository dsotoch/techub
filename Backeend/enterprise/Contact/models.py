from django.db import models

class Contact(models.Model):
    nombres=models.CharField(max_length=120)
    email=models.EmailField()
    telefono=models.CharField(max_length=20)
    mensaje=models.TextField(null=True)

    def __str__(self):
        return f'{self.nombres}"=>"{self.email}'
    

class Subscripcion(models.Model):
    email=models.EmailField()

    def __str__(self):
        return f'{self.email}'
