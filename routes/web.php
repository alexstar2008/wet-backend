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
Route::get('/technologies', 'HomeController');
Route::get('/technologies-content', 'HomeController');


//--Admin
Route::get('/admin', function () {
    return view('admin.home');
});
//Photo
Route::resource('admin/photos', 'PhotographyController');
//Category
Route::resource('admin/reference_category', 'ReferenceCategoryController');
//Library
Route::resource('admin/library', 'LibraryController');
//Enterprise
Route::prefix('admin/reference_enterprise/')->group(function () {
    Route::get('{category_id}', 'ReferenceEnterpriseController@index');
    Route::get('/single/{enterprise_id}', 'ReferenceEnterpriseController@single');
    Route::get('{category_id}/create', 'ReferenceEnterpriseController@create');

    Route::get('{category_id}/single/{id}/edit', 'ReferenceEnterpriseController@edit');
    Route::put('{id}', 'ReferenceEnterpriseController@update');

    Route::post('/', 'ReferenceEnterpriseController@store');
    Route::delete('{enterpriseId}', 'ReferenceEnterpriseController@destroy');
});
//Enterprise Equipment
Route::prefix('admin/reference_equipment/')->group(function () {
    Route::get('{enterprise_id}', 'ReferenceEquipmentController@index');
    Route::get('{id}/create', 'ReferenceEquipmentController@create');

    Route::get('{categoryId}/single/{id}/edit', 'ReferenceEquipmentController@edit');
    Route::put('{id}', 'ReferenceEquipmentController@update');

    Route::post('/', 'ReferenceEquipmentController@store');
    Route::delete('{enterpriseId}', 'ReferenceEquipmentController@destroy');
});
//--Equipment
//CCategory
Route::resource('admin/category', 'EquipmentCategoryController');
Route::prefix('admin/category')->group(function () {
    Route::get('/{category_id}/equipment', 'EquipmentController@index');
    Route::get('/{category_id}/equipment/create', 'EquipmentController@create');
    Route::get('/{categoryId}/equipment/{id}/edit', 'EquipmentController@edit');

    Route::put('/equipment/{id}', 'EquipmentController@update');
    Route::post('/equipment', 'EquipmentController@store');
    Route::delete('/{category_id}/equipment/{id}', 'EquipmentController@destroy');
});