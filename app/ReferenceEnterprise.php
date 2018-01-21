<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceEnterprise extends Model
{
    protected $table = 'reference_enterprises';

    public function category(){
        return $this->belongsTo('ReferenceCategory','reference_enterprises');
    }
}
