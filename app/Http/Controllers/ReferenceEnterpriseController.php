<?php

namespace App\Http\Controllers;

use App\ReferenceEnterprise;
use App\ReferenceEquipment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use phpDocumentor\Reflection\Types\Integer;

class ReferenceEnterpriseController extends Controller
{
    /**
     * Show enterprises of category
     * @param Integer category_id
     * @return Response
     */
    public function index($category_id)
    {
        $enterprises = ReferenceEnterprise::where('category_id', $category_id)->get();
        return view('admin.reference.enterprise.index', compact('enterprises', 'category_id'));
    }

    /**
     * Get category of enterprise
     * @param Integer $enterprise_id
     * @return Response
     */
    public function single($enterprise_id)
    {
        $category_id = ReferenceEnterprise::find($enterprise_id)->category_id;
        return redirect('/admin/reference_enterprise/'.$category_id);
    }

    /**
     * Show enterprises of category
     * @param Integer $category_id
     * @return Integer $id;
     */
    public function create($category_id)
    {
        return view('admin.reference.enterprise.create', compact('category_id'));
    }

    /**
     * Store enterprise
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $enterprise = new ReferenceEnterprise();
        $enterprise->category_id = $request->category_id;
        $enterprise->name = $request->name;
        $enterprise->save();
        return redirect('admin/reference_enterprise/' . $request->category_id);
    }

    /**
     * Get template for editing
     * @param Integer $category_id
     * @param Integer $id
     * @return Response
     */
    public function edit($category_id,$id)
    {
        $enterprise = ReferenceEnterprise::find($id);
        return view('admin.reference.enterprise.edit', compact('enterprise','category_id'));
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

        return redirect('admin/reference_enterprise/' . $request->category_id);
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

        return redirect('admin/reference_enterprise/' . $request->category_id);
    }
}
