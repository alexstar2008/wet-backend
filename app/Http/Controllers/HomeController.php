<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke()
    {
        return view('index');
    }
    public function login(){    
        // validate the info, create rules for the inputs
        $rules = array(
            'email'    => 'required|email',
            'password' => 'required|alphaNum|min:3' 
        );

        // run the validation rules on the inputs from the form
        $validator = Validator::make(Input::all(), $rules);

        // if the validator fails, redirect back to the form
        if ($validator->fails()) {
            return Redirect::to('admin')
                ->withErrors($validator)
                ->withInput(Input::except('password')); 
        } else {

            // create our user data for the authentication
            $userdata = array(
                'email'     => Input::get('email'),
                'password'  => Input::get('password')
            );
            Auth::attempt($userdata);
            return Redirect::to('/admin');
        }
    }
    public function logout(){
        Auth::logout(); // log the user out of our application
        return Redirect::to('/');
    }
}
