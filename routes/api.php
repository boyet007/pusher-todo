<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('todos', [TaskController::class, 'fetchAll']);
Route::post('todos', [TaskController::class, 'store']);
Route::delete('todos/{id}', [TaskController::class, 'delete']);