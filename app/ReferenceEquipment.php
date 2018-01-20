<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceEquipment extends Model
{
    protected $table = 'reference_equipment';

    public function category(){
        return $this->belongsTo('ReferenceCategory','reference_categories');
    }
}
