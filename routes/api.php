<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ChoixController;
use App\Http\Controllers\RdvController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("all-clients",[ClientController::class,"allClients"]);
Route::get("all-clients-pag",[ClientController::class,"allClients_pag"]);
Route::get("one-client/{client}",[ClientController::class,"oneClient"]);
Route::post("add-client",[ClientController::class,"addClient"]);


//Choix .........................

Route::get("all-choix",[ChoixController::class,"allChoix"]);
Route::post("add-choix",[ChoixController::class,"addChoix"]);
Route::delete("delete-choix/{choix}",[ChoixController::class,"deleteChoix"]);


//RDV..........................


Route::post("add-rdv",[RdvController::class,"addRdv"]);
Route::get("all-rdv",[RdvController::class,"allRdv"]);
Route::get("all-rdv-pag",[RdvController::class,"allRdv_pag"]);
Route::get("one-rdv",[RdvController::class,"oneRdv"]);
Route::patch("update-rdv/{rdv}",[RdvController::class,"updateRdv"]);

