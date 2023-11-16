<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth-sancrum') -> get('/user', function (Request $request) {
    return $request->user();
});

// Authentication
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'api'], function() {
    Route::post('logout',[AuthController::class, 'logout']);
    Route::post('me', [AuthController::class, 'refresh']);
    Route::post('refresh', [AuthController::class, 'me']);
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('/productsupdate/{id}', [ProductController::class, 'update']);
Route::delete('/productdelete/{id}', [ProductController::class, 'destroy']);
