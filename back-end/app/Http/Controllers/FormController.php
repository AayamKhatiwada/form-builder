<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function create(Request $request)
    {
        $question = Form::firstOrCreate([
            'json' => json_encode($request[0]),
            'Question1' => $request[1] ? $request[1] : null,
            'Question2' => $request[2] ? $request[2] : null,
            'Question3' => $request[3] ? $request[3] : null,
            'Question4' => $request[4] ? $request[4] : null,
            'Question5' => $request[5] ? $request[5] : null,
            'Question6' => $request[6] ? $request[6] : null,
            'Question7' => $request[7] ? $request[7] : null,
            'Question8' => $request[8] ? $request[8] : null,
            'Question9' => $request[9] ? $request[9] : null,
            'Question10' => $request[10] ? $request[10] : null,
        ]);

        return ['success' => $question];
    }

    public function get()
    {
        $slug = Form::all();

        return $slug;
    }
}
