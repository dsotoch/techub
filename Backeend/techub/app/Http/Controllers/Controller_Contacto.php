<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class Controller_Contacto extends Controller
{
    public function Crear(Request $request)
    {
        if ($request->method() == 'POST') {

            try {
                Contacto::create([
                    'nombres' => $request->input('nombres'),
                    'email' => $request->input('email'),
                    'telefono' => $request->input('telefono'),
                    'mensaje' => $request->input('mensaje'),
                ]);

                return response()->json(['mensaje' => 'Recibimos tu Solicitud, en breve nos comunicaremos contigo', 'estado' => 200]);
            } catch (\Exception $e) {
                return response()->json(['mensaje' => 'Error al procesar la solicitud' . '/' . $e->getMessage(), 'estado' => 500], 500);
            }
        } else {
            return response()->json(['mensaje' => 'Solicitud no Permitida', 'estado' => 500], 500);
        }
    }
    public function Crear_Suscripcion(Request $request)
    {
        if ($request->method() == 'POST') {

            try {
                Contacto::create([
                    'nombres' => '-',
                    'email' => $request->input('email'),
                    'telefono' => '-',
                    'mensaje' => '-',
                ]);

                return response()->json(['mensaje' => 'Recibimos tu Suscripción, estaras al dia de todas nuestras novedades', 'estado' => 200]);
            } catch (\Exception $e) {
                return response()->json(['mensaje' => 'Error al procesar la solicitud' . '/' . $e->getMessage(), 'estado' => 500], 500);
            }
        } else {
            return response()->json(['mensaje' => 'Solicitud no Permitida', 'estado' => 500], 500);
        }
    }
}
