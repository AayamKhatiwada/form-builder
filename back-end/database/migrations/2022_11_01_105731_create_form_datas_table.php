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
        Schema::create('form_datas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->uniqid;
            $table->text('User')->nullable();
            $table->text('Answer1')->nullable();
            $table->text('Answer2')->nullable();
            $table->text('Answer3')->nullable();
            $table->text('Answer4')->nullable();
            $table->text('Answer5')->nullable();
            $table->text('Answer6')->nullable();
            $table->text('Answer7')->nullable();
            $table->text('Answer8')->nullable();
            $table->text('Answer9')->nullable();
            $table->text('Answer10')->nullable();
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
        Schema::dropIfExists('form_datas');
    }
};
