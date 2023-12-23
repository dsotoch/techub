from django.shortcuts import render
from django.http import JsonResponse
from Blog.models import *
from django.core.serializers import serialize
import json

def BlogsAll(request):
    blog=Blog.objects.all()
    blogs_data=[]
    for blog in blog:
        blog_data={
            'id':blog.pk,
            'titulo':blog.titulo,
            'subtitulo':blog.subtitulo,
            'descripcion':blog.descripcion,
            'autor':blog.autor,
            'fecha':blog.fecha
        }
        blogs_data.append(blog_data)
    return JsonResponse(blogs_data,status=200,safe=False)

def Blogs(request,id):
    try:
        blog_id=int(id)
    except ValueError:
        return JsonResponse({'response':'Id de Blog No Valido'},status=404)
    
    try:
        blog=Blog.objects.get(pk=blog_id)
    except Blog.DoesNotExist:
        return JsonResponse({'response': 'Publicación de Blog no Encontrada'}, status=404)

    blog_data={
        'id':blog.id,
        'titulo':blog.titulo,
        'subtitulo':blog.subtitulo,
        'descripcion':blog.descripcion,
        'autor':blog.autor,
        'fecha':(blog.fecha).strftime('%Y-%m-%d'),
        'imagen': blog.imagen.url,
        'link': blog.link
    }
    return JsonResponse({'blog':blog_data},status=200)
    
def TreeBlogs(request):
    blog=Blog.objects.order_by('-fecha')[:3]
    blog_objects=[]
    for blog in blog:
        data ={
            'id':blog.pk,
            'titulo': blog.titulo,
            'subtitulo': blog.subtitulo,
            'fecha': blog.fecha,
            'autor': blog.autor,
            'descripcion': blog.descripcion,
            'imagen': blog.imagen.url,
            'link': blog.link,
        }
        blog_objects.append(data)
        
    
   
    return JsonResponse(blog_objects,status=200,safe=False)