<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceEnterprise extends Model
{
    protected $table = 'reference_enterprises';

    public function category()
    {
        return $this->belongsTo('App\ReferenceCategory', 'category_id');
    }

    public function equipment()
    {
        return $this->hasMany('App\ReferenceEquipment', 'enterprise_id');
    }
}
