@extends('Dashboard')
@section('titulo')
Techub-Contactos-Detalle
@endsection
@section('contenido')
<div class="p-4">
    <div class="flex justify-between  pr-4">
        <div class="text-xl p-4 font-semibold">Mostrando Detalle de un Contacto de
            <span class="text-green-500 italic">Tec</span>
            <span class="text-red-600 italic text-xl">Hub</span>
        </div>

    </div>
    <hr>

</div>
<div class="shadow border-2 p-4">
    <div class="rounded-md shadow-2xl space-y-2 bg-white text-gray-900 p-4 ">
        <div class="flex justify-between">
            <div><i class="fa-solid fa-envelope mr-2"></i><span class="font-medium ">Correo Electronico:</span></div>
            <div>{{$contacto->email}}</div>
        </div>
        <hr>
        <div class="flex justify-between">
            <div><i class="fa-solid fa-phone mr-2"></i><span class="font-medium ">Telefono:</span></div>
            <div>{{$contacto->telefono}}</div>
        </div>
        <hr>
        <div class="flex justify-between">
            <div> <i class="fa-solid fa-user-tie mr-2"></i><span class="font-medium ">Nombres:</span> </div>
            <div>{{$contacto->nombres}}</div>
        </div>
        <hr>
        <div class="grid ">
            <div><i class="fa-solid fa-arrows-to-circle mr-2"></i><span class="font-medium ">Asunto:</span></div>
            <div class="p-3">{{$contacto->mensaje}}</div>
        </div>
        <hr>
    </div>


</div>

@endsection