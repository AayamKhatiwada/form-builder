<?php

namespace App\Http\Controllers;

use App\Models\Form_data;
use Illuminate\Http\Request;

class FormDataController extends Controller
{
    public function create(Request $request)
    {

        $answer = Form_data::Create([
            'question_id' => $request->question_id,
            'User' => $request->user,
            'Answer1' => json_encode($request->question1),
            'Answer2' => json_encode($request->question2),
            'Answer3' => json_encode($request->question3),
            'Answer4' => json_encode($request->question4),
            'Answer5' => json_encode($request->question5),
            'Answer6' => json_encode($request->question6),
            'Answer7' => json_encode($request->question7),
            'Answer8' => json_encode($request->question8),
            'Answer9' => json_encode($request->question9),
            'Answer10' => json_encode($request->question10),
        ]);

        return ['success' => $answer];
    }
}
