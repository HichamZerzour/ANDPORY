<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Choix;
use App\Models\Client;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rdv>
 */
class RdvFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $prix_tot = Choix::sum('prix_un');
        $choixIds = Choix::pluck('id')->random(4);
         $choisIdsJson = json_encode($choixIds);

        return [
            //
            'date_rdv'=>fake()->date(),
            'heure_rdv'=>fake()->time(),
            'choix'=>$choisIdsJson,
            'prix_tot'=>$prix_tot,
            'peiment'=>fake()->boolean(),
            "client_id"=>Client::all()->random()->id,
        ];
    }

}
