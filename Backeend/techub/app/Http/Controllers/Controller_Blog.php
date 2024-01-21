<?php

namespace App\Http\Controllers;

use App\Models\Autor;
use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class Controller_Blog extends Controller
{
    public function index()
    {
        $autor = Autor::all();
        return view('Blogs.crear', ['autor' => $autor]);
    }
    public function Crear(Request $request)
    {
        $user = Auth::user();
        $titulo = $request->input('titulo');
        $subtitulo = $request->input('subtitulo');
        $descripcion = $request->input('descripcion');
        $fecha = $request->input('fecha');
        $autor = $request->input('autor');
        $imagen = $request->file('imagen');
        $link = $request->input('link');
        try {
            $imagen = Storage::putFileAs('public/Post', $imagen, 'demo' . '_' . $imagen->getClientOriginalName());
            Blog::create([
                'titulo' => $titulo,
                'subtitulo' => $subtitulo,
                'fecha' => Carbon::parse($fecha),
                'autor_id' => $autor,
                'descripcion' => $descripcion,
                'imagen' => $imagen,
                'link' => 'https://' . $link,
            ]);
        } catch (\Throwable $th) {
            Storage::delete('Post/' . basename($imagen));
            return redirect()->route('crear_blog')->with(['estado' => 'error', 'mensaje' => 'Hubo un Error ...Intentalo Nuevamente']);
        }
        return redirect()->route('crear_blog')->with(['estado' => 'success', 'mensaje' => 'Post creado correctamente']);
    }
    public function Eliminar($id)
    {
        $post = Blog::find($id);
        if ($post) {
            Storage::delete('Post/' . basename($post->imagen));
            $post->delete();
            session()->flash('estado', 'success');
            session()->flash('mensaje', 'Post eliminado correctamente.');
        } else {
            session()->flash('estado', 'error');
            session()->flash('mensaje', 'No se pudo encontrar el post para eliminar.');
        }

        return back();
    }
    public function Vista_Editar($id)
    {
        $post = Blog::find($id);
        $autor = Autor::all();
        if ($post) {
            return view('Blogs.editar', ['post' => $post, 'autor' => $autor]);
        } else {
            session()->flash('estado', 'error');
            session()->flash('mensaje', 'No se pudo encontrar el post para editar.');
            return back();
        }
    }
    public function Editar($id, Request $request)
    {
        $user = Auth::user();
        $titulo = $request->input('titulo');
        $subtitulo = $request->input('subtitulo');
        $descripcion = $request->input('descripcion');
        $fecha = $request->input('fecha');
        $autor = $request->input('autor');
        $imagen = $request->file('imagen');
        $link = $request->input('link');
        $post = Blog::find($id);
        if ($post) {
            $post->titulo = $titulo;
            $post->subtitulo = $subtitulo;
            $post->descripcion = $descripcion;
            $post->fecha = $fecha;
            $post->autor_id = $autor;
            $post->link = $link;
            if ($imagen) {
                Storage::delete(basename($post->imagen));
                $imagen = Storage::putFileAs('public/Post', $imagen, 'demo' . '_' . $imagen->getClientOriginalName());
                $post->imagen = $imagen;
            }
            session()->flash('estado', 'success');
            session()->flash('mensaje', 'Post Modificado Correctamente.');
            $post->save();
        } else {
            session()->flash('estado', 'error');
            session()->flash('mensaje', 'No se pudo encontrar el post para editar.');
        }
        return redirect()->route('vista_editar_post', $post->id);
    }

    #API

    public function Blogs_all()
    {
        $blog = Blog::all();
        $data = [];
        foreach ($blog as $blog) {
            $new = [
                'id' => $blog->id,
                'titulo' => $blog->titulo,
                'subtitulo' => $blog->subtitulo,
                'fecha' => $blog->fecha,
                'autor_id' => $blog->autor->nombre . ' ' . $blog->autor->empresa,
                'descripcion' => $blog->descripcion,
                'imagen' => $blog->imagen,
                'link' => $blog->link,
            ];
            array_push($data, $new);
        }
        return response()->json($data);
    }

    public function Buscar_blog($id)
    {
        $blog = Blog::find($id);
        if ($blog) {
            $blog = [
                'id' => $blog->id,
                'titulo' => $blog->titulo,
                'subtitulo' => $blog->subtitulo,
                'fecha' => $blog->fecha,
                'autor_id' => $blog->autor->nombre . ' ' . $blog->autor->empresa,
                'descripcion' => $blog->descripcion,
                'imagen' => $blog->imagen,
                'link' => $blog->link,
            ];
            return response()->json(['blog' => $blog]);
        }
    }
    public function Retornar_imagen($id)
    {
        $blog = Blog::find($id);
        if ($blog && $blog->imagen) {
            $path = Storage::path($blog->imagen);
            if (file_exists($path)) {
                $fileContents = file_get_contents($path);
                $response = response($fileContents, 200)->header('Content-Type', 'image/jpeg');
                return $response;
            }
        }
    }
}
