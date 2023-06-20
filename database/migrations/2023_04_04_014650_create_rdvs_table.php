<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rdvs', function (Blueprint $table) {
            $table->id();
            $table->date("date_rdv");
            $table->time("heure_rdv");
            $table->json("choix")->nullable();
            $table->double("prix_tot");
            $table->boolean("peiment");
            $table->boolean("statut")->default(true);
            $table->foreignId("client_id")->constrainted()->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rdvs');
    }
};
