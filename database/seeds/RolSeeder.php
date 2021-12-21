<?php

use App\Rol;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::create([
            "name" => "Administrador",
            "description" => "Administrador puede tener acceso total al sitio web"
        ]);
        Rol::create([
            "name" => "Usuario",
            "description" => "Usuario acceso a ciertas partes del sistema"
        ]);
    }
}
