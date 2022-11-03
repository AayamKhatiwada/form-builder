<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->text('json');
            $table->text('Question1')->nullable();
            $table->text('Question2')->nullable();
            $table->text('Question3')->nullable();
            $table->text('Question4')->nullable();
            $table->text('Question5')->nullable();
            $table->text('Question6')->nullable();
            $table->text('Question7')->nullable();
            $table->text('Question8')->nullable();
            $table->text('Question9')->nullable();
            $table->text('Question10')->nullable();
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
        Schema::dropIfExists('forms');
    }
};
