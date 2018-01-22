@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col s12 m10 offset-m2 ">
                    <a class="waves-effect waves-light btn red back-btn" href="/admin/reference_enterprise/single/{{$enterprise_id}}">Назад</a>
                </div>
            </div>
            <h4 class="center-align">Список оборудования</h4>
            <div class="row">
                <div class="col s12 center-align">
                    <a class="waves-effect waves-light btn green" href="/admin/reference_equipment/{{$enterprise_id}}/create">Добавить новое оборудование</a>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <table class="bordered highlight">
                        <thead>
                        <tr>
                            <th>Предназначение</th>
                            <th>Оборудование</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($equipment as $equip)
                            <tr>
                                <td>{{$equip->mission}}</td>
                                <td>{{$equip->equipment}}</td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/reference_equipment/{{$enterprise_id}}/single/{{$equip->id}}/edit">Редактировать</a>
                                </td>
                                <td>
                                    {{ Form::open(['url'=>'/admin/reference_equipment/'.$equip->id,'method'=>'delete']) }}
                                    <input type="hidden" value="{{$enterprise_id}}" name="enterprise_id" />
                                    <button class="btn waves-effect waves-light red" type="submit" name="action">
                                        Удалить
                                    </button>
                                    {{ Form::close() }}
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection