from django.urls import path
from .views import *
urlpatterns=[
    path('setContact',setContact),
    path('setSubscripcion',setSuscripcion)

]