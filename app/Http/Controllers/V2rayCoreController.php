<?php

namespace App\Http\Controllers;

use App\WebsocketAccount;
use Illuminate\Http\Request;

class V2rayCoreController extends Controller
{
    public function v2rayUSA1(Request $data){
        $uuid = "";
        $comand = 'UUID='.$uuid.' && "$(bash adduser.sh)" ';
        
        $exec = ssh2_exec(connect('159.65.173.13','jose_DEO123_sv',22), $comand);
        stream_set_blocking($exec, true); 
        $result = 'sdfds'; 
        while ($fread = fread($exec, 4096)) { 
            $result .= $fread; 
        } 

        return response()->json(["data" => $fread]);
    }
}
