<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Client;
class ClientController extends Controller
{
    //
    public function allClients(){
        return Client::all();
    }
    public function allClients_pag(){
        return Client::paginate(10);
    }
    public function oneClient(Client $client){
        return $client;
    }
    public function addClient(Request $req){
       $newClient= new Client();
       $newClient->prenom=$req->prenom;
       $newClient->nom=$req->nom;
       $newClient->tel=$req->tel;
       $newClient->email=$req->email;
       $newClient->save();
       return $newClient->id;
    }
}
