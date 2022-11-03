<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form_data extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function form(){
        return $this->hasOne(Form::class);
    }
}
