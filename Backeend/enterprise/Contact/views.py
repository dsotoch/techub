from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from .models import *
@csrf_exempt
def setContact(request):
    if request.method == 'POST':
        try:
            data = request.POST.dict()
            nombres = data.get('name')
            email = data.get('email')
            telefono = data.get('phone')
            mensaje=data.get('mensaje')
            Contact.objects.create(
                nombres=nombres,
                email=email,
                telefono=telefono,
                mensaje=mensaje
            )

            return JsonResponse({'message': 'Solicitud procesada correctamente'}, status=200)

        except ValidationError as e:
            return JsonResponse({'error': str(e)}, status=400)  # Devuelve mensajes de error de validación

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)  # Devuelve mensajes de error genéricos

    return JsonResponse({'error': 'Método no permitido'}, status=405)


@csrf_exempt
def setSuscripcion(request):
    if request.method == 'POST':
        try:
            data = request.POST.dict()
            email = data.get('email')
            
            # Crear la suscripción
            Subscripcion.objects.create(email=email)

            return JsonResponse({'message': 'Recibimos tu correo, pronto recibirás actualizaciones de nuestra cartelera'}, status=200)

        except ValidationError as e:
            return JsonResponse({'message': 'Error de validación: {}'.format(str(e))}, status=400)
        except Exception as e:
            return JsonResponse({'message': 'Error interno del servidor: {}'.format(str(e))}, status=500)
    else:
        return JsonResponse({'message': 'Método no permitido'}, status=405)