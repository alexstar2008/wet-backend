<?php

namespace App\Http\Controllers;

use App\ReferenceEnterprise;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use phpDocumentor\Reflection\Types\Integer;

class ReferenceEnterpriseController extends Controller
{
    /**
     * Show enterprises of category
     * @param Integer $id
     * @return Integer $id;
     */
    public function index($id)
    {
        $enterprises = ReferenceEnterprise::where('category_id', $id)->get();
        return view('admin.reference.enterprise.index', compact('enterprises', 'id'));
    }

    /**
     * Show enterprises of category
     * @param Integer $id
     * @return Integer $id;
     */
    public function create($id)
    {
        return view('admin.reference.enterprise.create', compact('id'));
    }

    /**
     * Store enterprise
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $enterprise = new ReferenceEnterprise();
        $enterprise->category_id = $request->category;
        $enterprise->name = $request->name;
        $enterprise->save();
        return redirect('admin/reference_enterprise/' . $request->category);
    }

    /**
     * Get template for editing
     * @param Integer $categoryId
     * @param Integer $id
     * @return Response
     */
    public function edit($categoryId,$id)
    {
        $enterprise = ReferenceEnterprise::find($id);
        return view('admin.reference.enterprise.edit', compact('enterprise','categoryId'));
    }

    /**
     * Update enterprise
     * @param Request $request
     * @param Integer $id
     * @return Response
     */
    public function update(Request $request,$id)
    {
        $enterprise = ReferenceEnterprise::find($id);
        $enterprise->name = $request->name;
        $enterprise->save();

        return redirect('admin/reference_enterprise/' . $request->category);
    }

    /**
     * Delete enterprise
     * @param Request $request
     * @param Integer $enterpriseId
     * @return Response
     */
    public function destroy(Request $request, $enterpriseId)
    {
        $enterprise = ReferenceEnterprise::find($enterpriseId);
        $enterprise->delete();

        return redirect('admin/reference_enterprise/' . $request->category);
    }
}
