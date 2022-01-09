<?php

namespace App\Http\Controllers;

use App\Http\Resources\WebsocketAccount as ResourcesWebsocketAccount;
use App\User;
use App\WebsocketAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WebsocketAccountController extends Controller
{
    public function index()
    {
        $users = DB::table('users')->join(
            "websocket_accounts","users.id", "=","websocket_accounts.user_id"
        )->get();
        return response()->json( [ 
            "data" => [
                "total" =>  WebsocketAccount::count(),
                "accounts" => $users
            ]
            ]);
    }
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
    public function create_server_usa(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = $this->getDate();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        //$exec = ssh2_exec($this->connect('143.198.170.229','vps_2021',22), $comand);

        $exec = ssh2_exec($this->connect('192.168.49.186','jose002',22), $comand);

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
    
    public function premium_usa1(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = $this->getDate_day15();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec($this->connect('45.55.63.154','vps_2021',22), $comand);

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
    public function create_server_canada(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = $this->getDate();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec($this->connect('134.122.44.205','vps_2021',22), $comand);

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
    public function getDate_day15(){
        date_default_timezone_set('America/El_Salvador');
        $year = date('Y');
        $month = date('n');
        $day = date('j');

        if($day < 16){
            $day = date('j') + 15;
        }else{
            if($day > 16 && $month > 11){
                $month = 1;
                $year = $year + 1;
            }else{
                if($month < 12){
                    $month++;
                }
            }
            //15 DAYS
            $days = date('j') + 15;
            $day = $days - 31;
            if($day == 0){
                $day = 1;
            }
        }
        return $date = strval($year."-".$month."-".$day);
    }
    public function destroy(WebsocketAccount $websocketAccount)
    {
        $comand = 'userdel '. $websocketAccount->user;
    
        //$exec = ssh2_exec($this->connect('143.198.170.229','vps_2021',22), $comand);

        $exec = ssh2_exec($this->connect('192.168.49.186','jose002',22), $comand);
        return response()->json($websocketAccount->delete());
    }
}
