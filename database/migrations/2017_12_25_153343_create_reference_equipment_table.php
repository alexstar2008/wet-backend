<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReferenceEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reference_equipment', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mission',300);
            $table->string('equipment',300);
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('reference_categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reference_equipment');
    }
}
