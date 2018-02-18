<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    protected $table = 'equipment';

    public function category()
    {
        return $this->belongsTo('App\EquipmentCategory', 'category_id');
    }
}
