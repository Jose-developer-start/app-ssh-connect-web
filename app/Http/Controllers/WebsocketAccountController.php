<?php

namespace App\Http\Controllers;

use App\Http\Resources\WebsocketAccount as ResourcesWebsocketAccount;
use App\WebsocketAccount;
use Illuminate\Http\Request;
class WebsocketAccountController extends Controller
{
    public function index()
    {
        return response()->json( [ 
            "data" => [
                "account" =>  WebsocketAccount::count()
            ]
            ]);
    }
    public function connectSSH(){
        if (!function_exists('ssh2_connect')) {
            die('No existe la funcion ssh2_connect.'); 
        }
        //$ip = '143.198.170.229';
        $ip = '192.168.43.89';
        //$clave = 'vps_2021';
        $clave = 'jose002';
        if (!($connection = ssh2_connect($ip, 22))) {
            die('No se puede conectar con el servidor VPS.'); 
        }
        if (!ssh2_auth_password($connection, 'root', $clave)) {
            die('No se puede autenticar con el usuario y clave suministrados.'); 
        }
        return $connection;
    }
    public function store(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = $this->getDate();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec($this->connectSSH(), $comand);

        $account = WebsocketAccount::create([
            'user' => $user,
            'passwd' => $passwd,
            'date' => $date,
            'status' => 1,
            'user_id' => 1
        ]);

        return response()->json($account);
    }
    public function getDate(){
        date_default_timezone_set('America/El_Salvador');
        $year = date('Y');
        $month = date('n');
        $day = date('j');
        if($day < 29){
        $day = date('j') + 3;
        }else{
            if($day > 28 and $month > 11){
            $month == 1;
            $year = $year + 1;
            }else{
                if($month < 12){
                    $month++;
                }
            }
            //7 DAYS
            $days = date('j') + 3;
            $day = $days - 31;
        }
        return $date = strval($year."-".$month."-".$day);
    }
    public function destroy(WebsocketAccount $websocketAccount)
    {
        //
    }
}
