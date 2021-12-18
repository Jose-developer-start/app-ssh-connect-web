<?php

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

Route::resource('posts','PostController');

//Rutas Api
Route::get('websockets','WebsocketAccountController@index');
Route::post('websockets','WebsocketAccountController@store');

//Rutas Users Api
Route::get('users','UserController@index');
Route::post('register','UserController@register');
Route::post('login','UserController@login');
//Route::get('users','UserController@index');