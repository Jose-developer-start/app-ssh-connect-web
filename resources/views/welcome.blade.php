<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Hive VPN ofrece cuentas premium para el protocolo websocket, las cuentas de 5 dias son gratis y las de 31 dias son pagadas, los métodos de pagos son Bitcoin (Satoshig)">
        <title>Hive VPN | Cuentas SSH</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/493/493678.png" type="image/jpg">
        <!---FONTAWESOME--->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
        <div id="app">

        </div>
        <script src="{{ asset("js/app.js") }}"></script>
        <script src="https://cdn.rawgit.com/zenorocha/clipboard.js/v1.5.3/dist/clipboard.min.js"></script>
    </body>
</html>
