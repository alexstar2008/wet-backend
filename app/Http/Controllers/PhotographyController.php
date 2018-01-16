<?php

namespace App\Http\Controllers;

use App\Photography;
use Illuminate\Http\Request;

class PhotographyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $photos = Photography::all();
        return view('admin.photo.index', compact('photos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.photo.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $photo = new Photography();
        $photo->name = $request->name;
        $photo->desc = $request->desc;

        $file = $request->file('img');
        if ($file) {
            $lastPhoto = Photography::all()->last();
            $imgId = isset($lastPhoto) ? $lastPhoto->id + 1 : 1;
            $imgName = 'photo' . $imgId . '.' . $file->getClientOriginalExtension();

            $file->move(public_path() . '/photos', $imgName);
            $photo->img = $imgName;
        }

        $photo->save();

        return redirect('/admin/photos');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Photography $photography
     * @return \Illuminate\Http\Response
     */
    public function edit(Photography $photography)
    {
        return view('admin.photo.edit', compact($photography));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Photography $photo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photography $photo)
    {
        $photo->name = $request->name;
        $photo->desc = $request->desc;

        $file = $request->file('img');
        if ($file) {
            if ($photo->img) {
                $imgId = substr($photo->img, 0, strpos($photo->img, '.'));
            } else {
                $imgId = 'conference' . $photo->id;
            }
            $imgName = $imgId . '.' . $file->getClientOriginalExtension();

            $file->move(public_path() . '/photos', $imgName);
            $photo->img = $imgName;
        }

        $photo->save();

        return redirect('/admin/photos');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Photography $photography
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photography $photography)
    {
        $photography->delete();
        return redirect('/admin/photos');
    }
}
