@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m2 ">
            <a class="waves-effect waves-light btn red back-btn" href="/admin/reference_equipment/{{$enterprise_id}}">Назад</a>
        </div>
    </div>
    <h4 class="center-align">Редактирование оборудования</h4>
    {{ Form::open(['url'=>'/admin/reference_equipment/'.$equipment->id,'method'=>'put','class'=>'col s12"']) }}
        <input type="hidden" name="enterprise_id" value="{{$enterprise_id}}" />
        <div class="row">
            <div class="input-field col s12 m6 offset-m2">
                <input name="mission" id="name" type="text" class="validate"
                       maxlength="200" value="{{$equipment->mission}}">
                <label for="name">Предназначение</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m8 offset-m2">
                    <textarea id="desc" name="equipment" class="materialize-textarea" maxlength="350">
                        {{$equipment->equipment}}
                    </textarea>
                <label for="desc">Оборудование</label>
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