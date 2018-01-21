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
Route::resource('admin/reference_category','ReferenceCategoryController');
Route::resource('admin/reference_equipment','ReferenceEquipmentController');


Route::prefix('admin/reference_enterprise/')->group(function() {
    Route::get('{id}','ReferenceEnterpriseController@index');
    Route::get('{id}/create','ReferenceEnterpriseController@create');

    Route::get('{categoryId}/single/{id}/edit','ReferenceEnterpriseController@edit');
    Route::put('{id}','ReferenceEnterpriseController@update');

    Route::post('/','ReferenceEnterpriseController@store');
    Route::delete('{enterpriseId}','ReferenceEnterpriseController@destroy');
});
