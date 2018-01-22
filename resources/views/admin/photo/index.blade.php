@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col s12 m10 offset-m2 ">
                    <a class="waves-effect waves-light btn red back-btn" href="/admin">Назад</a>
                </div>
            </div>
            <h4 class="center-align">Список обьектов</h4>
            <div class="row">
                <div class="col s12 center-align">
                    <a class="waves-effect waves-light btn green" href="/admin/photos/create">Добавить новое фото
                        обьекта</a>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <table class="bordered highlight">
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Изображение</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($photos as $photo)
                            <tr>
                                <td>{{$photo->name}}</td>
                                <td>{{$photo->desc}}</td>
                                <td>
                                    <img src="{{asset('/photos/'.$photo->img)}}" class="photo-img"/>
                                </td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/photos/{{$photo->id}}/edit">Редактировать</a>
                                </td>
                                <td>
                                    {{ Form::open(['url'=>'/admin/photos/'.$photo->id,'method'=>'delete']) }}
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