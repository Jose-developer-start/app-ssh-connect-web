<?php

namespace App\Http\Controllers;

use App\Http\Resources\WebsocketAccount as ResourcesWebsocketAccount;
use App\User;
use App\WebsocketAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class WSFreeAccountController extends Controller
{
   
    public function create_server_usa1(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = get_3_Days();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('138.197.65.194','vps-2021-hive',22), $comand);
        //$exec = ssh2_exec(connect('192.168.49.186','jose002',22), $comand);

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
    public function create_server_usa2(Request $request)
    {
        $request->validate([
            "user" => "required",
            "passwd" => "required",
        ]);

        $user = $request->user;
        $passwd = $request->passwd;
        $date = get_3_Days();

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('143.244.188.234','vps-2021-hive',22), $comand);

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
