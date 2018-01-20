<?php

namespace App\Http\Controllers;

use App\ReferenceCategory;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

class ReferenceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = ReferenceCategory::all();
        return view('admin.reference.category.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.reference.category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new ReferenceCategory();
        $category->name = $request->name;
        $category->save();

        return redirect('/admin/reference_category');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  Integer  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = ReferenceCategory::find($id);
        return view('admin.reference.category.edit',compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReferenceCategory  $referenceCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReferenceCategory $referenceCategory)
    {
        $referenceCategory->name = $request->name;
        $referenceCategory->updated_at = $request->updated_at;
        $referenceCategory->save();

        return redirect('/admin/reference_category');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ReferenceCategory  $referenceCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReferenceCategory $referenceCategory)
    {
        $referenceCategory->delete();

        return redirect('/admin/reference_category');
    }
}
