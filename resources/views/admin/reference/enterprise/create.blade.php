@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/reference_enterprise/">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Добавление предприятия</h4>
    {{ Form::open(['url'=>'/admin/reference_enterprise/','method'=>'post','class'=>'col s12"']) }}
        <input type="hidden" value="{{$id}}" name="category" />
        <div class="row">
            <div class="input-field col s12 m6 offset-m2">
                <input name="name" id="name" type="text" class="validate" maxlength="200">
                <label for="name">Название</label>
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