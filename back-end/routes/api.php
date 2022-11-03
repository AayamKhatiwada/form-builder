<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\FormDataController;
use App\Http\Controllers\SlugController;
use App\Http\Controllers\SlugDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('createQuestion', [FormController::class, 'create']);

Route::post('submitAnswer', [FormDataController::class, 'create']);

Route::get('all-form', [FormController::class, 'get']);

