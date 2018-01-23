@extends('admin.main')

@section('content')
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col s12 m10 offset-m2 ">
                    <a class="waves-effect waves-light btn red back-btn" href="/admin/category">Назад</a>
                </div>
            </div>
            <h2 class="center-align">Оборудование</h2>
            <h4 class="center-align">Список файлов</h4>
            <div class="row">
                <div class="col s12 center-align">
                    <a class="waves-effect waves-light btn green"
                       href="/admin/category/{{$category_id}}/equipment/create">
                        Добавить новый файл
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
                        @foreach($equipment as $equip)
                            <tr>
                                <td>{{$equip->name}}</td>
                                <td>
                                    {{$equip->doc}}
                                    {{--<iframe src="/pdf/sample-3pp.pdf#page=2" width="100%" height="100%">--}}
                                    {{--This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/sample-3pp.pdf">Download PDF</a>--}}
                                    {{--</iframe>--}}
                                </td>
                                <td>
                                    <a class="waves-effect waves-light btn blue lighten-2"
                                       href="/admin/category/{{$category_id}}/equipment/{{$equip->id}}/edit">Редактировать</a>
                                </td>
                                <td>
                                    {{ Form::open(['url'=>'/admin/category/'.$category_id.'/equipment/'.$equip->id,'method'=>'delete']) }}
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