<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'HomeController');
Route::get('/contacts', 'HomeController');
Route::get('/assembling-service', 'HomeController');
Route::get('/about-us', 'HomeController');
Route::get('/we-offer', 'HomeController');
Route::get('/photo-gallery', 'HomeController');
Route::get('/reference', 'HomeController');


Route::get('/admin', function () {
    return view('admin.home');
});
Route::resource('admin/photos', 'PhotographyController');

