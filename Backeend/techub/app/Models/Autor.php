<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Autor extends Model
{
    protected $fillable = [
        'nombre',
        'empresa'
    ];

    public function Blog(): HasMany
    {
        return $this->hasMany(Blog::class);
    }
}
