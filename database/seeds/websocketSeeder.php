<?php

use App\WebsocketAccount;
use Illuminate\Database\Seeder;

class websocketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WebsocketAccount::create([
            'user' => "sandra",
            'passwd' => "sandra",
            'date' => "2021-12-24",
            'status' => 1,
            'user_id' => 1
        ]);
        WebsocketAccount::create([
            'user' => "javier1",
            'passwd' => "javier1",
            'date' => "2022-01-09",
            'status' => 1,
            'user_id' => 2
        ]);
        WebsocketAccount::create([
            'user' => "miguel",
            'passwd' => "miguel",
            'date' => "2021-12-21",
            'status' => 1,
            'user_id' => 3
        ]);
        WebsocketAccount::create([
            'user' => "ruben1",
            'passwd' => "ruben1",
            'date' => "2022-01-07",
            'status' => 1,
            'user_id' => 4
        ]);
        WebsocketAccount::create([
            'user' => "ruben2",
            'passwd' => "ruben2",
            'date' => "2022-01-10",
            'status' => 1,
            'user_id' => 4
        ]);
        WebsocketAccount::create([
            'user' => "elizabeth",
            'passwd' => "elizabeth",
            'date' => "2022-01-11",
            'status' => 1,
            'user_id' => 5
        ]);
        WebsocketAccount::create([
            'user' => "rikelme1",
            'passwd' => "rikelme1",
            'date' => "2022-01-11",
            'status' => 1,
            'user_id' => 6
        ]);
        WebsocketAccount::create([
            'user' => "omar1",
            'passwd' => "omar123",
            'date' => "2022-01-14",
            'status' => 1,
            'user_id' => 7
        ]);
    }
}
