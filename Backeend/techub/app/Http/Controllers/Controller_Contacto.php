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
                    'nombres' => $request->input('name'),
                    'email' => $request->input('email'),
                    'telefono' => $request->input('phone'),
                    'mensaje' => $request->input('mensaje'),
                ]);

                return response()->json(['mensaje' => 'Recibimos tu Solicitud, en breve nos comunicaremos contigo.', 'estado' => 200]);
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
    public function Eliminar_Contacto($id)
    {
        try {
            Contacto::find($id)->delete();
            session()->flash('estado', 'success');
            session()->flash('mensaje', 'Contacto eliminado Correctamente');
        } catch (\Throwable $th) {
            session()->flash('estado', 'error');
            session()->flash('mensaje', 'Hubo un Error al eliminar el contacto.' . '/' . $th->getMessage());
        }
        return back();
    }
    function Detalle_Contacto($id)
    {
        try {
            $contacto = Contacto::find($id);
        } catch (\Throwable $th) {
            session()->flash('estado', 'error');
            session()->flash('mensaje', 'Hubo un Error con el Contacto Seleccionado.' . '/' . $th->getMessage());
            return back();
        }
        return view('Contacto.detalle', ['contacto' => $contacto]);
    }
}
