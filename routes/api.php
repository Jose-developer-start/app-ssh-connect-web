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
Route::post('websockets/us/us1','WebsocketAccountController@store');
//Canada
Route::post('websockets/canada/toronto','WebsocketAccountController@canada');

//Paga
Route::post('websockets/premium/usa/us1','WebsocketAccountController@premium_usa1');

//Rutas Users Api
Route::get('users','UserController@index');
//Obtener usuario indiviual
Route::get('users/{id}','UserController@getUser');


Route::post('register','UserController@register');
Route::post('login','UserController@login');
//Route::get('users','UserController@index');

//Payment
Route::post('/payment','PaymentController@createPayment');
Route::get('/payment/status',['as' => 'status', 'uses' => 'PaymentController@getPaymentStatus']);