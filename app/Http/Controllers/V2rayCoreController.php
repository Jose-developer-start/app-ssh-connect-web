<?php

namespace App\Http\Controllers;

use App\WebsocketAccount;
use Illuminate\Http\Request;

class V2rayCoreController extends Controller
{
    public function v2rayUSA1(Request $data){
        $uuid = "";
        $comand = "bash adduser.sh";
        
        $stream = ssh2_exec(connect('159.65.168.3','jose_DEO123_sv',22), $comand);
        stream_set_blocking( $stream, true );
 
        $data = "";
        
        while( $buf = fread($stream,4096) ){
        
        $data .= $buf;
        //Output uuid
        echo $buf;
        
        } 
        fclose($stream);
    }
}
