@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <h4 class="center-align">Список предприятий</h4>
            <div class="row">
                <div class="col s12 center-align">
                    <a class="waves-effect waves-light btn green" href="/admin/reference_enterprise/{{$id}}/create">Добавить предприятие</a>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <table class="bordered highlight">
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($enterprises as $enterprise)
                            <tr>
                                <td>{{$enterprise->name}}</td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/reference_enterprise/{{$id}}/single/{{$enterprise->id}}/edit">Редактировать</a>
                                </td>
                                <td>
                                    {{ Form::open(['url'=>'/admin/reference_enterprise/'.$enterprise->id,'method'=>'delete']) }}
                                    <input type="hidden" value="{{$id}}" name="category" />
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