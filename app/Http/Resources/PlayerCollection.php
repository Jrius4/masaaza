<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PlayerCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return
        [
            'identifer'=>$this->id,
            'name'=>$this->name,
            'biography'=>$this->bio,
        ];
    }

    public function with($request)
    {
        return [
            'version'=>'1.0.0',
            'author_name'=>'Kazibwe Julius Junior',
            'email'=>'kazibwejuliusjunior@gmail.com',
        ];
    }
}
