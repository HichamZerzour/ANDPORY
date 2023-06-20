<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Choix;
class ChoixController extends Controller
{
    //
    public function allChoix(){
        return Choix::orderBy("id","desc")->get();
    }
    public function addChoix(Request $req){

       $newChoix= new Choix();
       $newChoix->libelle=$req->libelle;
       $newChoix->prix_un=$req->prix_un;
       $newChoix->save();
        return $newChoix ?  response()->json(['message'=>"Le Choix est créer avec succée"],200) :  response()->json(['message'=>"Une erreur d'est produit lors de la création de choix"],500);

    }

    public function deleteChoix(Choix $choix){
        $choix->delete();
        return response()->json(["message"=>"Choix supprimer avec succes"],200);
    }
}
