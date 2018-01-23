<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WET</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <!-- Fonts -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
{{--<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">--}}
{{--<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">--}}

{{--Materialize--}}
<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="{{asset('/css/admin.css')}}"/>
</head>
<body>
<nav>
    <div class="nav-wrapper blue">
        <div class="container">
            <a href="/" class="brand-logo left">WET</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/admin/photos">Фото обьектов</a></li>
                <li><a href="/admin/reference_category">Референс</a></li>
                <li><a href="/admin/library">Библиотека</a></li>
                <li><a href="/admin/category">Оборудование</a></li>
            </ul>
        </div>
    </div>
</nav>
@yield('content')
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

<footer class="page-footer blue">
    <div class="footer-copyright">
        <div class="container">
            © 2018 WET All rights are reserved
        </div>
    </div>
</footer>
</body>
</html>