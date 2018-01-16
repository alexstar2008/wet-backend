@extends('admin.main')

@section('content')
    <table class="bordered highlight">
        <thead>
        <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Изображение</th>
        </tr>
        </thead>
        <tbody>
        @foreach($photos as $photo)
            <td>{{$photo->name}}</td>
            <td>{{$photo->desc}}</td>
            <td><img src="/public/photos/{{$photo->img}}" /></td>
        @endforeach
        <tr>
        </tr>
        </tbody>
    </table>
@endsection