<?php

use App\Http\Controllers\Controller_Blog;
use App\Http\Controllers\Controller_Contacto;
use App\Http\Controllers\Controller_Dashboard;
use Illuminate\Http\Middleware\HandleCors;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::controller(Controller_Dashboard::class)->group(
    function () {
        Route::get('/', 'index');
        Route::get('/Blogs', 'blogs')->name('blogs');
        Route::get('/Contactos', 'contactos')->name('contactos');
    }
);
Route::controller(Controller_Blog::class)->prefix('Blog')->group(function () {
    Route::get('/', 'index')->name('crear_blog');
    Route::post('/Crear', 'Crear')->name('guardar_post');
    Route::delete('/Eliminar/{id}', 'Eliminar')->name('eliminar_post');
    Route::get('/View_Editar/{id}', 'Vista_Editar')->name('vista_editar_post');
    Route::put('/Editar/{id}', 'Editar')->name('editar_post');
});
Route::middleware([HandleCors::class])->controller(Controller_Contacto::class)->prefix('Contacto')->group(function () {
    Route::post('/Crear', 'Crear')->name('guardar_contacto');
    Route::post('/CrearSuscripcion', 'Crear_Suscripcion')->name('guardar_contacto_suscripcion');

});
