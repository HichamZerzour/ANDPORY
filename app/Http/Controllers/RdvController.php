<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Rdv;
use App\Models\Choix;
class RdvController extends Controller
{
    //
    public function allRdv(){
        return Rdv::all();


    }
     public function allRdv_pag(){
        return Rdv::orderBy("date_rdv","desc")->paginate(10);
    }
    public function oneRdv(Rdv $rdv){
        return $rdv;
    }
    public function addRdv(Request $req){

        //calcul de Prix total
        $mes_choix=Choix::whereIn("id",$req->choix)->get();
        $sum=0;
        foreach($mes_choix as $mon_choix) {
            $sum+=$mon_choix->prix_un;
        }
        // FIn calcul

        $newRdv=new Rdv();
        $newRdv->date_rdv=$req->date_rdv;
        $newRdv->heure_rdv=$req->heure_rdv;
        $newRdv->choix=json_encode($req->choix);
        $newRdv->prix_tot=$sum;
        $newRdv->peiment=$req->peiment;
        $newRdv->client_id=$req->client_id;
        $newRdv->save();



        return $newRdv ?  response()->json(['message'=>"Le Rdv est créer avec succée"],200) :  response()->json(['message'=>"Une erreur d'est produit lors de la création de RDV"],500);
    }
    public function updateRdv(Rdv $rdv){
            $rdv->statut=0;
            $rdv->save();

            //ENVOIE UN SMS au CLIEENT
           /*  $basic  = new \Vonage\Client\Credentials\Basic("96ea73cc", "JiMCSFY34DagMQqf");
            $client = new \Vonage\Client($basic);

           $response = $client->sms()->send(
                new \Vonage\SMS\Message\SMS("212616443551", "Andory BarberShop", 'Bonjour, ')
            ); */
            return response()->json(['message'=>"Le Rdv est Annulé"],200);
    }
}
