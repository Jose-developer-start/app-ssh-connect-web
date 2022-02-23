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
    //ESTADOS UNIDOS 15 dias
    public function premium_usa1(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = getDate_day15();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('159.203.170.193','vps-2021-hive',22), $comand);

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
    //Estados Unidos 31 dias
    public function premium_usa2(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = getDate_day31();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('159.203.170.193','vps-2021-hive',22), $comand);

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
    //CANADA 31 DIAS
    public function premium_ca1(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = getDate_day31();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('147.182.146.77','vps-2021-hive',22), $comand);

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

    public function destroy(WebsocketAccount $websocketAccount)
    {
        $comand = 'userdel '. $websocketAccount->user;
    
        //$exec = ssh2_exec(connect('143.198.170.229','vps_2021',22), $comand); //VPS OLD
        $exec = ssh2_exec(connect('159.203.170.193','vps-2021-hive',22), $comand);

        //$exec = ssh2_exec(connect('192.168.49.186','jose002',22), $comand); //VPS PRUEBA
        return response()->json($websocketAccount->delete());
    }
}
