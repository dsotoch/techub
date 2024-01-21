@extends('Dashboard')
@section('contenido')
<div class="p-4">
    <div class="flex justify-between">
        <div class="text-xl p-4 font-semibold">Todos los Blogs de
            <span class="text-green-500 italic">Tec</span>
            <span class="text-red-600 italic text-xl">Hub</span> => {{$cantidad}}
        </div>
        <a href="{{route('crear_blog')}}"> <button class="bg-blue-700 hover:bg-blue-400 text-white p-4  rounded-md font-semibold"><i class="fas fa-add mr-2"></i>Nuevo</button>
        </a>
    </div>
    <br>
    <hr class="text-black">

    @if(session('mensaje'))
    <div id="div_mensaje" class="bg-{{ session('estado') === 'success' ? 'green' : 'red' }}-500 text-white p-4 mb-2 rounded-md font-semibold">
        <p>{{ session('mensaje') }}</p>
    </div>
    <script>
        let mensaje = document.getElementById('div_mensaje');
        if (mensaje) {
            setTimeout(() => {
                mensaje.classList.add('hidden');
            }, 3000);
        }
    </script>
    @endif
    @if($cantidad==0)
    <div class="text-center text-blue-700 text-xl">
        <label for="">No Existen Registros para Mostrar</label>
    </div>
    @else
    <div class="w-full">
        <table class="table border border-collapse w-full">
            <thead class="border text-center text-white bg-gray-900">

                <th class="pt-2 pb-2">Codigo</th>
                <th>Titulo</th>
                <th>Fecha</th>
                <th>Autor</th>
                <th>Acciones</th>

            </thead>
            <tbody class="text-center ">
                @foreach($blogs->slice(0,10) as $c)
                <tr class="border">
                    <td class="pt-2 pb-2">{{$c->id}}</td>
                    <td>{{$c->titulo}}</td>
                    <td>{{$c->fecha}}</td>
                    <td>{{$c->autor->nombre}} -- {{$c->autor->empresa}}</td>
                    <td class="text-center">
                        <div class="flex justify-center">
                            <div class="m-2">


                                <a href="{{ route('vista_editar_post', $c->id) }}"> <button type="submit" class="bg-none"><i class="fas fa-edit hover:text-blue-600 text-yellow-500"></i></buttton>
                                </a>
                            </div>
                            <div class="m-2">
                                <form action="{{ route('eliminar_post', $c->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="bg-none"><i class=" fas fa-trash hover:text-blue-600 text-red-500"></i></button>
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
                @endforeach


            </tbody>
        </table>
    </div>
    @endif
</div>
@endsection