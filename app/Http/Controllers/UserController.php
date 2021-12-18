<?php

namespace App\Http\Controllers;

use App\Http\Resources\User as UserResource;
use App\Http\Resources\WebsocketAccount as ResourcesWebsocketAccount;
use App\User;
use App\WebsocketAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return [
            "data" => "conected"
        ];
    }
    public function getUser($id){
        $account = WebsocketAccount::where('user_id',$id)->get();
        return ResourcesWebsocketAccount::collection($account);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $user = User::where('email',$request->email)->first();
        if($user){
            return response()->json([
                'data' => 'El correo ya esta registrado'
            ]);
        }
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return response()->json([
            'data' => 'Usuario creado exitosamente!!'
        ]);
    }
    public function login(Request $request)
    {
        $user = User::where('email',$request->email)->first();
        if(!$user){
            return response()->json([
                'data' => [
                    "name" => "",
                    "result" => "Tu email no esta registrado!!"
                ]
            ]);
        }

        if(!Hash::check($request->password,$user->password)){
            return response()->json([
                'data' => [
                    "name" => "",
                    "result" => "E-mail o clave invalidos!!"
                ]
            ]);
        }
        return new UserResource($user);
    }
}
