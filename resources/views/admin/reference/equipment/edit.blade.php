@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/photos/">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Редактирование </h4>
    {{ Form::open(['url'=>'/admin/photos/'.$photo->id,'method'=>'put','class'=>'col s12"','files'=>true]) }}
    <div class="row">
        <div class="input-field col s12 m6 offset-m2">
            <input name="name" id="name" type="text" class="validate"
                   maxlength="200" value="{{$photo->name}}">
            <label for="name">Название</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12 m8 offset-m2">
                <textarea id="desc" name="desc" class="materialize-textarea" maxlength="350">
                    {{$photo->desc}}
                </textarea>
            <label for="desc">Описание</label>
        </div>
    </div>
    @isset($photo->img)
    <div class="row">
        <div class="col s12 m10 offset-m2">
            <img class="photo-img" src="{{asset('/photos/'.$photo->img)}}"/>
        </div>
    </div>
    @endisset
    <div class="row">
        <div class="file-field input-field col m8 offset-m2">
            <div class="btn green">
                <span>Изменить изображение</span>
                <input type="file" name="img">
            </div>
            <div class="file-path-wrapper">
                <input class="file-path validate" type="text" value="{{$photo->img}}">
            </div>
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