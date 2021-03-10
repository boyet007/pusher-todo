<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $task = new Task();
        $task->title = 'Gosok Gigi';
        $task->save();

        $task = new Task();
        $task->title = 'Mandi';
        $task->save();

        $task = new Task();
        $task->title = 'Membuat Program';
        $task->save();

        $task = new Task();
        $task->title = 'Tidur';
        $task->save();
    }
}
