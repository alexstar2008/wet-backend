@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/reference_enterprise/{{$category_id}}">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Редактирование предприятия</h4>
    {{ Form::open(['url'=>'/admin/reference_enterprise/'.$enterprise->id,'method'=>'put','class'=>'col s12"']) }}
    <input type="hidden" name="category_id" value="{{$category_id}}" />
    <div class="row">
        <div class="input-field col s12 m6 offset-m2">
            <input name="name" id="name" type="text" class="validate"
                   maxlength="300" value="{{$enterprise->name}}">
            <label for="name">Название</label>
        </div>
    </div>
    <div class="row">
        <div class="col s12 center-align">
            <button class="btn-large waves-effect waves-light blue" type="submit" name="action">
                Сохранить изменения
            </button>
        </div>
    </div>
    {{ Form::close() }}
@endsection