<?php

namespace App\Http\Controllers;

use App\ReferenceEquipment;
use Illuminate\Http\Request;

class ReferenceEquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $equipment = ReferenceEquipment::all()->where('category_id',$request->get('id'));
        return  view('admin.reference.equipment.index',compact('equipment'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ReferenceEquipment  $referenceEquipment
     * @return \Illuminate\Http\Response
     */
    public function show(ReferenceEquipment $referenceEquipment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ReferenceEquipment  $referenceEquipment
     * @return \Illuminate\Http\Response
     */
    public function edit(ReferenceEquipment $referenceEquipment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReferenceEquipment  $referenceEquipment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReferenceEquipment $referenceEquipment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ReferenceEquipment  $referenceEquipment
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReferenceEquipment $referenceEquipment)
    {
        //
    }
}
