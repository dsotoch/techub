<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="{{asset('images/logo_pequeño.png')}}" type="image/x-icon">
    <title>@yield('titulo')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    @vite('resources/css/app.css')
    @yield('estilos')
</head>

<body class="m-0 p-0">
    <header class="shadow">
        <div class="grid w-full h-full ">
            <div class="flex bg-gray-800 p-2  justify-between mx-auto my-0 w-full rounded-sm ">
                <div class="w-1/6 grid justify-items-center">
                    <img src="{{asset('images/logo_pequeño.png')}}" alt="">
                </div>
                <label for="" class="text-white font-semibold my-auto text-2xl pr-4">Techub Admin Backeend</label>
            </div>
        </div>
    </header>
    <div class="flex justify-start h-full">
        <div class="flex flex-col  border-r-4 shadow mt-2  p-4 md:pl-10 md:pr-10 w-1/5 text-gray-900 text-xl">
            <a href="{{route('blogs')}}">
                <div class="flex mt-5 shadow p-2 group">
                    <i class="fa-solid fa-blog my-auto group-hover:text-blue-600"></i>
                    <button class="rounded-sm  group-hover:text-blue-600  bg-none p-4  my-auto"> Post
                        <hr>
                    </button>
                </div>
            </a>
            <a href="{{route('blogs')}}">
                <div class="flex shadow p-2 group">
                    <i class="fa-solid fa-user my-auto group-hover:text-blue-600"></i>
                    <button class="rounded-sm group-hover:text-blue-600  bg-none p-4"> Autores
                        <hr>
                    </button>
                </div>
            </a>
            <a href="{{route('contactos')}}">
                <div class="flex shadow p-2 group">
                    <i class="fa-solid fa-address-book my-auto group-hover:text-blue-600"></i>
                    <button class="rounded-sm  group-hover:text-blue-600  bg-none p-4 ">Contactos
                        <hr>
                    </button>
                </div>
            </a>


        </div>
        <div class="w-full overflow-y-auto shadow ml-2 mt-2 mr-2">@yield('contenido')</div>


    </div>

</body>

</html>