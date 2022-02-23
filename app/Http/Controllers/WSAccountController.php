<?php

namespace App\Http\Controllers;

use App\WebsocketAccount;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class WSAccountController extends Controller
{
    public function create_ssh(Request $request)
    {
        $user = $request->user;
        $passwd = $request->passwd;
        $date = $request->date;

        $comand = 'useradd -e '.$date.' -p "$(mkpasswd --method=sha-512 '.$passwd.')" '.$user;
        
        $exec = ssh2_exec(connect('159.203.170.193','vps-2021-hive',22), $comand);

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
