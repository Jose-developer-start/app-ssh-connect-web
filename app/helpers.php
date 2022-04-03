<?php
    //Function connection via ssh
    function connect($host,$passwd,$port){
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
    function get_3_Days(){
        date_default_timezone_set('America/El_Salvador');
        $fecha_actual = date("d-m-Y");
        //sumo 3 days
        $fecha = date("d-m-Y",strtotime($fecha_actual."+ 4 days")); 
        $divFecha = explode("-",$fecha);
        $validFecha = strval($divFecha[2]."-".$divFecha[1]."-".$divFecha[0]);
        return $validFecha;
    }

    function getDate_day15(){
        date_default_timezone_set('America/El_Salvador');
        $fecha_actual = date("d-m-Y");
        //sumo 15 days
        $fecha = date("d-m-Y",strtotime($fecha_actual."+ 15 days")); 
        $divFecha = explode("-",$fecha);
        $validFecha = strval($divFecha[2]."-".$divFecha[1]."-".$divFecha[0]);
        return $validFecha;
    }
    function getDate_day31(){
        date_default_timezone_set('America/El_Salvador');
        $fecha_actual = date("d-m-Y");
        //sumo 1 mes
        $fecha = date("d-m-Y",strtotime($fecha_actual."+ 1 month")); 
        $divFecha = explode("-",$fecha);
        $validFecha = strval($divFecha[2]."-".$divFecha[1]."-".$divFecha[0]);
        return $validFecha;
    }
    
?>