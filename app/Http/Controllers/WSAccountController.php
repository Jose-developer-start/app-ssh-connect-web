<?php

namespace App\Http\Controllers;

use App\WebsocketAccount;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class WSAccountController extends Controller
{
    public function connect($host,$passwd,$port){
        //Validation function ssh
        if (!function_exists('ssh2_connect')) {
            die('No existe la funcion ssh2_connect.'); 
        }
        if (!($connection = ssh2_connect($host, $port))) {
            die('No se puede conectar con el servidor VPS.'); 
        }
        if (!ssh2_auth_password($connection, 'root', $passwd)) {
            die('No se puede autenticar con el usuario y clave suministrados.'); 
        }
        //Return conexion
        return $connection;
    }
    public function create_ssh(Request $request)
    {
        $user = $request->user;
        $passwd = $request->passwd;
        $date = $request->date;

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec($this->connect('45.55.63.154','vps_2021',22), $comand);

        //$exec = ssh2_exec($this->connect('192.168.49.186','jose002',22), $comand);
        $account = WebsocketAccount::create([
            'user' => $user,
            'passwd' => $passwd,
            'date' => $date,
            'status' => 1,
            'user_id' => $request->user_id,
            'country' => $request->country
        ]);

        return response()->json($account);
    }
}
