@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col s12 m10 offset-m2 ">
                    <a class="waves-effect waves-light btn red back-btn" href="/admin">Назад</a>
                </div>
            </div>
            <h2 class="center-align">Оборудование</h2>
            <h4 class="center-align">Список категорий</h4>
            <div class="row">
                <div class="col s12 center-align">
                    <a class="waves-effect waves-light btn green" href="/admin/category/create">
                        Добавить новую категорию
                    </a>
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
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($categories as $category)
                            <tr>
                                <td>{{$category->name}}</td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/category/{{$category->id}}/equipment    ">
                                        Файлы категории
                                    </a>
                                </td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/category/{{$category->id}}/edit">Редактировать</a>
                                </td>
                                <td>
                                    {{ Form::open(['url'=>'/admin/category/'.$category->id,'method'=>'delete']) }}
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