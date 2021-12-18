<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "Sandra",
            'email' => "premium-2021-11-00@hive-vpn.tk",
            'password' => Hash::make("sandra")
        ]);
        User::create([
            'name' => "Javier",
            'email' => "javier@hive-vpn.tk",
            'password' => Hash::make("javier")
        ]);
        User::create([
            'name' => "miguel",
            'email' => "miguel@hive-vpn.tk",
            'password' => Hash::make("miguel")
        ]);
        User::create([
            'name' => "ruben",
            'email' => "ruben@hive-vpn.tk",
            'password' => Hash::make("ruben")
        ]);
        User::create([
            'name' => "elizabeth",
            'email' => "elizabeth@hive-vpn.tk",
            'password' => Hash::make("elizabeth")
        ]);
        User::create([
            'name' => "rikelme",
            'email' => "rikelme@hive-vpn.tk",
            'password' => Hash::make("rikelme")
        ]);
        User::create([
            'name' => "omar",
            'email' => "omar@hive-vpn.tk",
            'password' => Hash::make("omar")
        ]);
    }
}
