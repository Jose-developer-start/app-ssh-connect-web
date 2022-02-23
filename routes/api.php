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
Route::post('websockets/us/us1','WSFreeAccountController@create_server_usa1');
//Canada
Route::post('websockets/usa2','WSFreeAccountController@create_server_usa2');
//Delete SSH

Route::delete('websockets/{websocketAccount}','WebsocketAccountController@destroy');

//Paga
Route::post('websockets/premium/usa/us1','WebsocketAccountController@premium_usa1');
Route::post('websockets/premium/usa/us2','WebsocketAccountController@premium_usa2');
//Paga Canada 1
Route::post('websockets/premium/ca/toronto1','WebsocketAccountController@premium_ca1');

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

/**
 * =========NEW MODULE PERSONALITY SSH=========
 * 
*/
Route::post('/create_ssh','WSAccountController@create_ssh');