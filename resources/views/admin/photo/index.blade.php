@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <h4 class="center-align">Список обьектов</h4>
            <div class="row">
                <div class="col s12 offset-m1">
                    <a class="waves-effect waves-light btn green" href="/admin/photos/create">Добавить новое фото обьекта</a>
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
                            <td>{{$photo->name}}</td>
                            <td>{{$photo->desc}}</td>
                            <td><img src="{{asset('/photos/'.$photo->img)}}"/></td>
                            <td>
                                <a class="waves-effect waves-light btn blue lighten-2">Редактировать</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn red">Удалить</a>
                            </td>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection