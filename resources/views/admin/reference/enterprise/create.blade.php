@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/reference_enterprise/{{$category_id}}">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Добавление предприятия</h4>
    {{ Form::open(['url'=>'/admin/reference_enterprise/','method'=>'post','class'=>'col s12"']) }}
        <input type="hidden" value="{{$category_id}}" name="category_id" />
        <div class="row">
            <div class="input-field col s12 m6 offset-m2">
                <textarea id="name" name="name" class="materialize-textarea" maxlength="300"></textarea>
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