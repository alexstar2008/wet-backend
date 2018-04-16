<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @isset($title)
        <title> {{ $title }}</title>
    @else
        <title>Water Eco Tech</title>
    @endisset
    @isset($desc)
        <meta name="description" content={{$desc}} />  
    @else
        <meta name="description" content="Компания ООО «Вотер Эко Тех» образована в июне 2015 г.  на базе коллектива сотрудников ООО «Джурби Вотер Тех», в которую вошли отделы инжиниринга, химической обработки воды, монтажа и сервиса." />
    @endisset
    @isset($keywords)
        <meta name="keywords" content={{$keywords}} />
    @else
        <meta name="keywords" content="украина,україна,ukraine,wet,water eco tech,вотер экто тех,вода, оборудование, технологии,подготовка воды,монтаж,сервис,вотер эко тех,библиотека,джурби,инжиниринг,использованием воды,вода,ХВО,Украина,Україна,Пашкевич,Киев,вет" />
    @endisset
    
    <!-- Font awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Philosopher:400,700" rel="stylesheet">
    <!-- Favicon -->
    <link href="./imgs/favicon.ico" rel="shortcut icon" type="image/x-icon">
</head>
<body>
    <div id="root"></div>
    <script src="{{mix('js/app.js')}}" ></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>
