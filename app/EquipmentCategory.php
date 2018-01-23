<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EquipmentCategory extends Model
{
    protected $table='equipment_category';

    public function equipments(){
        $this->hasMany('App\Equipment','category_id');
    }
}
