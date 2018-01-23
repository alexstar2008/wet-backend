<?php

namespace App\Http\Controllers;

use App\Equipment;
use App\EquipmentCategory;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Integer $category_id
     * @return \Illuminate\Http\Response
     */
    public function index($category_id)
    {
        $equipment = Equipment::where('category_id', $category_id)->get();
        return view('admin.equipment.index', compact('equipment', 'category_id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Integer $category_id
     * @return \Illuminate\Http\Response
     */
    public function create($category_id)
    {
        return view('admin.equipment.create', compact('category_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category_id = $request->category_id;
        $equipment = new Equipment();
        $equipment->category_id = $category_id;
        $equipment->name = $request->name;

        $file = $request->file('pdf');
        if (isset($file)) {
            $fileName = $file->getClientOriginalName();
            $file->move(public_path() . '/files', $fileName);
            $equipment->doc = $fileName;
        }
        $equipment->save();

        return redirect('/admin/category/' . $category_id . '/equipment');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Integer $category_id
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function edit($category_id, $id)
    {
        $equipment = Equipment::find($id);
        return view('admin.equipment.edit', compact('equipment', 'category_id'));
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
        $category_id = $request->category_id;
        $equipment = Equipment::find($id);
        $equipment->name = $request->name;

        $file = $request->file('pdf');
        if (isset($file)) {
            //remove first
            $path = public_path() . '/files/' . $equipment->doc;
            if (file_exists($path)) {
                unlink($path);
            }
            //set new
            $fileName = $file->getClientOriginalName();
            $file->move(public_path() . '/files', $fileName);
            $equipment->doc = $fileName;
        }
        $equipment->save();

        return redirect('/admin/category/' . $category_id . '/equipment');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Integer $category_id
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($category_id, $id)
    {
        $equipment = Equipment::find($id);
        $equipment->delete();
        $path = public_path() . '/files/' . $equipment->doc;
        if (file_exists($path)) {
            unlink($path);
        }
        return redirect('admin/category/'.$category_id.'/equipment/');
    }
}
