<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Rdv;
class Client extends Model
{
    use HasFactory;

    public function rdv()
    {
        return $this->hasMany(Rdv::class);
    }
}
