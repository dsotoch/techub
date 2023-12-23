from django.urls import path
from django.conf.urls import static
from django.conf import settings
from .views import *
urlpatterns=[
    path('',BlogsAll),
    path('getBlog/<id>',Blogs),
    path('treeBlogs/',TreeBlogs)

]

