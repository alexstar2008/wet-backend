@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/library/">Назад</a>
        </div>
    </div>

    <h4 class="center-align">Добавление нового PDF</h4>
    {{ Form::open(['url'=>'/admin/library/','method'=>'post','class'=>'col s12"','files'=>true]) }}
        <div class="row">
            <div class="input-field col s12 m6 offset-m2">
                <input name="name" id="name" type="text" class="validate" maxlength="200">
                <label for="name">Название</label>
            </div>
        </div>
        <div class="row">
            <div class="file-field input-field col m6 offset-m2 ">
                <div class="btn green">
                    <span>Прикрепить файл</span>
                    <input type="file" name="pdf" required>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 center-align">
                <button class="btn-large waves-effect waves-light blue" type="submit" name="action">
                    Добавить
                </button>
            </div>
        </div>
    {{ Form::close() }}
@endsection