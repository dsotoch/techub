<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blog extends Model
{
    protected $fillable = [
        'titulo',
        'subtitulo',
        'fecha',
        'autor_id',
        'descripcion',
        'imagen',
        'link',
    ];

    public function Autor():BelongsTo
    {
        return $this->belongsTo(Autor::class);
    }
}
