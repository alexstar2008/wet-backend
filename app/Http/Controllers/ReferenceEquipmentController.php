<?php

namespace App\Http\Controllers;

use App\ReferenceEquipment;
use Illuminate\Http\Request;

class ReferenceEquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Integer $enterprise_id
     * @return \Illuminate\Http\Response
     */
    public function index($enterprise_id)
    {
        $equipment = ReferenceEquipment::where('enterprise_id', $enterprise_id)->get();
        return view('admin.reference.equipment.index', compact('equipment','enterprise_id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Integer $enterprise_id
     * @return \Illuminate\Http\Response
     */
    public function create($enterprise_id)
    {
        return view('admin.reference.equipment.create', compact('enterprise_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $equipment = new ReferenceEquipment();
        $equipment->mission = $request->mission;
        $equipment->equipment = $request->equipment;
        $equipment->enterprise_id = $request->enterprise_id;
        $equipment->save();

        return redirect('admin/reference_equipment/'.$request->enterprise_id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Integer $enterprise_id
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function edit($enterprise_id, $id)
    {
        $equipment = ReferenceEquipment::find($id);
        return view('admin.reference.equipment.edit',compact('equipment','enterprise_id'));
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
        $equipment = ReferenceEquipment::find($id);
        $equipment->mission  = $request->mission;
        $equipment->equipment = $request->equipment;
        $equipment->save();

        return redirect('admin/reference_equipment/'.$request->enterprise_id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        $equipment = ReferenceEquipment::find($id);
        $equipment->delete();

        return redirect('admin/reference_equipment/'.$request->enterprise_id);
    }
}
