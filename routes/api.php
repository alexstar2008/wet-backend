<?php

use Illuminate\Http\Request;
use App\EquipmentCategory;
use App\Equipment;
use App\ReferenceEnterprise;
use App\ReferenceCategory;
use App\ReferenceEquipment;
use \App\Photography;
use \App\PDF;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::get('/reference', function () {
    return ReferenceCategory::with(['enterprises.equipment'])->get();
});
Route::get('/photos', function () {
    return Photography::all();
});
Route::get('/equipment',function(){
    return EquipmentCategory::with('equipments')->get();
});
Route::get('/equipment/{id}' ,function($id){
    return Equipment::where('category_id',$id)->get();
});
Route::get('/library', function () {
    return PDF::all();
});
