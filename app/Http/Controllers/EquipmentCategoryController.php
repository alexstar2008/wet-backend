<?php

namespace App\Http\Controllers;

use App\EquipmentCategory;
use Illuminate\Http\Request;

class EquipmentCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = EquipmentCategory::all();
        return view('admin.equipment.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.equipment.category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $equipmentCategory = new EquipmentCategory();
        $equipmentCategory->name = $request->name;
        $equipmentCategory->save();
        return redirect('admin/category');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EquipmentCategory $category
     * @return \Illuminate\Http\Response
     */
    public function edit(EquipmentCategory $category)
    {
        return view('admin.equipment.category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $equipmentCategory = EquipmentCategory::find($id);
        $equipmentCategory->name = $request->name;
        $equipmentCategory->save();
        return redirect('admin/category');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $equipmentCategory = EquipmentCategory::find($id);
        $equipmentCategory->delete();
        return redirect('admin/category');
    }
}
