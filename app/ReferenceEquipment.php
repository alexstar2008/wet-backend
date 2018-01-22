<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceEquipment extends Model
{
    protected $table = 'reference_equipment';

    public function enterprise(){
        return $this->belongsTo('App\ReferenceEnterprise','enterprise_id');
    }
}
