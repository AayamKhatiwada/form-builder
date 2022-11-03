<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function form_data(){
        return $this->hasMany(Form_data::class);
    }

    public function slug(){
        return $this->hasOne(Slug::class);
    }
}
