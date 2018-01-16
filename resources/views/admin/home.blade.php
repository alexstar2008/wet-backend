@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col s12 m6 offset-m3">
            <div class="card center-align #1565c0 blue darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Добро пожаловать в админ панель!</span>
                    <p>Выберите, пожалуйста, раздел для редактирования</p>
                </div>
                <div class="card-action">
                    <a href="/admin/photos">Фото обьектов</a>
                    <a href="/admin/reference">Референс</a>
                </div>
            </div>
        </div>
    </div>
@endsection