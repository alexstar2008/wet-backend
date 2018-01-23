@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/category/{{$category_id}}/equipment">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Редактирование файла</h4>
    {{ Form::open(['url'=>'/admin/category/equipment/'.$equipment->id,'method'=>'put','class'=>'col s12"','files'=>true]) }}
    <input type="hidden" name="category_id" value="{{$category_id}}" />
    <div class="row">
        <div class="input-field col s12 m6 offset-m2">
            <input name="name" id="name" type="text" class="validate"
                   maxlength="200" value="{{$equipment->name}}">
            <label for="name">Название</label>
        </div>
    </div>
    @isset($equipment->doc)
        <div class="row">
            <div class="col s12 m10 offset-m2">
                {{--            <img class="photo-img" src="{{asset('/photos/'.$photo->img)}}"/>--}}
            </div>
        </div>
    @endisset
    <div class="row">
        <div class="file-field input-field col m8 offset-m2">
            <div class="btn green">
                <span>Изменить pdf файл</span>
                <input type="file" name="pdf">
            </div>
            <div class="file-path-wrapper">
                <input class="file-path validate" type="text" value="{{$equipment->doc}}">
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