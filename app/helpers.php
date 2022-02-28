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
        $year = date('Y');
        $month = date('n');
        $day = date('j');
        if($day < 28){
            if($month == 2){
                $day = date('j') + 3;
                $month ++;
                $day = $day - 28;
            }else{
                $day = date('j') + 3;
            }
        }else{
            if($day > 28 and $month > 11){
                $month == 1;
                $year = $year + 1;
            }else{
                if($month < 12){
                    if($month == 2){
                        $day = $day +3;
                        $day -= 28;
                    }else{
                        $days = date('j') + 3;
                        $day = $days - 31;
                    }
                    $month++;
                }
            }

        }
        return $date = strval($year."-".$month."-".$day);
    }

    function getDate_day15(){
        date_default_timezone_set('America/El_Salvador');
        $year = date('Y');
        $month = date('n');
        $day = date('j');

        if($day < 16){
            $day = date('j') + 15;
            //Caso febrero //Evitar error de MySQL type DATE
            $day = $day - 1;
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
    function getDate_day31(){
        date_default_timezone_set('America/El_Salvador');
        $year = date('Y');
        $month = date('n');
        $day = date('j');

        if($day < 3){
            $day = date('j') + 30;
        }else{
            if($day > 3 && $month > 11){
                $month = 1;
                $year = $year + 1;
            }else{
                if($month < 12){
                    $month++;
                }
            }
            //31 DAYS
            $days = $day + 30;
            $day = $days - 30;
            if($day == 0){
                $day = 1;
            }
        }
        return $date = strval($year."-".$month."-".$day);
    }
    
?>