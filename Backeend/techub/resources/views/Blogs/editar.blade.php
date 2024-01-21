@extends('Dashboard')
@section('contenido')
<div class="p-4">
  <div class="flex justify-between">
    <div class="text-xl pt-4 pl-4 pr-4 font-semibold">Editar Post en
      <span class="text-green-500 italic">Tec</span>
      <span class="text-red-600 italic text-xl">Hub</span>
    </div>
  </div>
  <br>
  <hr class="text-black">
  <form action="{{route('editar_post',$post->id)}}" method="post" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    <div class="space-y-2">
      <div class="flex">
        <div class="border-b border-gray-900/10 pb-12 w-1/2 p-4">
          <h2 class="text-sm font-medium  leading-6 text-gray-900">Titulo</h2>
          <input type="text" name="titulo" id="titulo" autocomplete="titulo" class="block flex-1 border-sky-100 bg-transparent py-1.5 pl-1 w-full
         text-gray-900 placeholder:text-gray-400 rounded-sm ring-2 hover:ring-blue-700 " value="{{$post->titulo}}" required placeholder="Ingresa el Titulo del Post">
        </div>
        <div class="border-b border-gray-900/10 pb-12 w-1/2 p-4">
          <h2 class="text-sm font-semibold leading-6 text-gray-900">Subtitulo</h2>
          <input type="text" name="subtitulo" id="subtitulo" autocomplete="subtitulo" class="block flex-1 border-sky-100 bg-transparent py-1.5 pl-1 w-full
         text-gray-900 placeholder:text-gray-400 rounded-sm ring-2 hover:ring-blue-700 " value="{{$post->subtitulo}}" required placeholder="Ingresa el Subtitulo del Post">
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-0">

        <div class="flex justify-between ">
          <div>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Información del Post</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Comparte el Contenido para la Comunidad.</p>
          </div>
          @if(session('mensaje'))
          @if(session('estado')=== 'success')
          <div class="bg-green-500 text-white p-4 rounded-md font-semibold" id="mensajeDiv">
            <p>{{ session('mensaje') }}</p>

          </div>
          @else
          <div class="bg-green-500 text-white p-4 rounded-md font-semibold" id="mensajeDiv">
            <p>{{ session('mensaje') }}</p>

          </div>
          @endif
          <script>
            var mensajeDiv = document.getElementById('mensajeDiv');
            if (mensajeDiv) {
              setTimeout(() => {
                mensajeDiv.classList.add('hidden');
              }, 4000);

            }
          </script>
          @endif

        </div>
        <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 ">
          <div class="sm:col-span-3">
            <label for="descripcion" class="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
            <div class="mt-2">
              <textarea type="text" rows="5" name="descripcion" id="descripcion" required class= "p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              {{$post->descripcion}}
              </textarea>
            </div>
          </div>
          <div class="md:flex grid grid-cols-1 md:justify-between">
            <div class="col-span-4 md:w-1/3  w-full p-3 my-auto">
              <label for="imagen" class="block text-sm font-medium leading-6 text-gray-900">Imagen</label>
              <div class="mt-2">
                <input id="imagen" name="imagen" type="file" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="col-span-4 md:w-1/3 w-full p-3 my-auto">
              <label for="fecha" class="block text-sm font-medium leading-6 text-gray-900">Fecha</label>
              <input id="fecha" name="fecha" type="date" value="{{ $post->fecha}}" required class="block w-full rounded-md cursor-pointer mt-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

            </div>
            <div class="col-span-3 md:w-1/3 w-full p-3 my-auto">
              <label for="autor" class="block text-sm font-medium leading-6 text-gray-900">Autor</label>
              <div class="mt-2">
                <select id="autor" name="autor" required class="block w-full rounded-md border-0  p-2 bg-white cursor-pointer  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  @foreach($autor as $a)
                  @if($post->autor->id ==$a->id)
                  <option value="{{$a->id}}" selected>{{$a->nombre}} -- {{$a->empresa}}</option>
                  @else
                  <option value="{{$a->id}}">{{$a->nombre}} -- {{$a->empresa}}</option>
                  @endif
                  @endforeach
                </select>
              </div>
            </div>
            <div class="col-span-4 md:w-1/3 w-full p-3 my-auto">
              <label for="link" class="block text-sm font-medium leading-6 text-gray-900">Url para mas Información</label>
              <input id="link" name="link" type="text" value="{{basename($post->link)}}" placeholder="www.example.com" required class="block w-full rounded-md  mt-2 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

            </div>
          </div>






        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <a href="{{ route('blogs')}}" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</a>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    </div>
  </form>
</div>

@endsection