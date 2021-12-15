<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WebsocketAccount extends Model
{
    protected $table = "websocket_accounts";
    protected $fillable = [
        'user', 'passwd','date','status','user_id'
    ];
}
