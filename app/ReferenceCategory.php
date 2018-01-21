<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceCategory extends Model
{
    protected $table = 'reference_categories';

//    public function equipment(){
//        return $this->hasMany('ReferenceEquipment','reference_categories');
//    }

    public function enterprise(){
        return $this->hasMany('ReferenceEnterprise','reference_enterprises');
    }
}
