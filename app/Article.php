<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    protected $fillable = [
        'title', 'slug', 'excerpt','body','user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
