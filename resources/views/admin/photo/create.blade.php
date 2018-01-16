@extends('admin.main')

@section('content')

    <div class="row">
        {{--<div class="col s12">--}}
        {{Form::open(['url'=>'/admin/photos','method'=>'post'])}}
            <div class="row">
                <div class="input-field col s6">
                    <label for="name_photo">Название</label>
                    <input  name="name" id="name_photo" class="validate">
                </div>
                <div class="input-field col s6">
                    <label for="name_photo">Описание</label>
                    <input  name="desc" id="name_photo" class="validate">
                </div>
            </div>
            <div class="file-field input-field">
                <div class="btn">
                    <span>Изображение</span>
                    <input type="file" name="img">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate">
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Сохранить
                <i class="material-icons right">send</i>
            </button>
        {{Form::close()}}
        {{--</div>--}}
    </div>
@endsection