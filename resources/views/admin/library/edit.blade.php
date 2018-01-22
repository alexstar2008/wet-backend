@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/library/">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Редактирование PDF</h4>
    {{ Form::open(['url'=>'/admin/library/'.$pdf->id,'method'=>'put','class'=>'col s12"','files'=>true]) }}
    <div class="row">
        <div class="input-field col s12 m6 offset-m2">
            <input name="name" id="name" type="text" class="validate"
                   maxlength="200" value="{{$pdf->name}}">
            <label for="name">Название</label>
        </div>
    </div>
    @isset($pdf->doc)
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
                <input class="file-path validate" type="text" value="{{$pdf->doc}}">
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