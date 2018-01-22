<?php

namespace App\Http\Controllers;

use App\PDF;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $files = PDF::all();
        return view('admin.library.index', compact('files'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.library.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pdf = new PDF();
        $pdf->name = $request->name;

        $file = $request->file('pdf');
        if(isset($file)){
            $fileName = $file->getClientOriginalName();
            $file->move(public_path().'/files',$fileName);
            $pdf->doc = $fileName;
        }
        $pdf->save();

        return redirect('/admin/library');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PDF $pDF
     * @return \Illuminate\Http\Response
     */
    public function show(PDF $pDF)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pdf = PDF::find($id);
        return view('admin.library.edit',compact('pdf'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $pdf = PDF::find($id);
        $pdf->name = $request->name;

        $file = $request->file('pdf');
        if(isset($file)){
            //remove first
            $path = public_path().'/files/'.$pdf->doc;
            if(file_exists($path)){
                unlink($path);
            }
            //set new
            $fileName = $file->getClientOriginalName();
            $file->move(public_path().'/files',$fileName);
            $pdf->doc = $fileName;
        }
        $pdf->save();

        return redirect('/admin/library');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pdf = PDF::find($id);
        $pdf->delete();
        $path = public_path().'/files/'.$pdf->doc;
        if(file_exists($path)){
            unlink($path);
        }
        return redirect('admin/library');
    }
}
