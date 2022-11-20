<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PassportAuthController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class,'store']);

Route::post('/students_store', [StudentController::class,'store']);
Route::post('/students_show', [StudentController::class,'show']);
Route::get('/students_token', [StudentController::class,'showToken']);
Route::post('/students_delete', [StudentController::class,'destroy']);
Route::post('/students_update', [StudentController::class,'update']);

Route::get('/show_students_by_program', [ProgramController::class,'show_students_by_program']);

Route::post('/register', [PassportAuthController::class,'register']);
Route::post('/login', [PassportAuthController::class,'login']);