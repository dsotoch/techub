<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Contacto;
use Illuminate\Http\Request;

class Controller_Dashboard extends Controller
{
    public function index(){
        return view('Dashboard');
    }
    public function blogs(){
        $blogs=Blog::all();
        $cantidad=$blogs->count();
        return view('Blogs',['cantidad'=>$cantidad,'blogs'=>$blogs]);
    }
    public function contactos(){
        $contactos=Contacto::all();
        $cantidad=$contactos->count();
        return view('Contactos',['cantidad'=>$cantidad,'contactos'=>$contactos]);
    }

}
