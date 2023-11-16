<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

     public function registerPost(Request $request)
         {
             $user = new User();

             $user->name = $request->name;
             $user->email = $request->email;
             $user->password = Hash::make($request->password);

             $user->save();

             return redirect('/')->with('success', 'Register Successfully');

         }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}


// class AuthController extends Controller
// {
//     public function register()
//     {
//         return view('register');
//     }

//     public function registerPost(Request $request)
//     {
//         $user = new User();

//         $user->name = $request->name;
//         $user->email = $request->email;
//         $user->password = Hash::make($request->password);

//         $user->save();

//         return redirect('/login')->with('success', 'Register Successfully');

//     }

//     public function login()
//     {
//         return view('login');
//     }

//     public function loginPost(Request $request)
//     {
//         $credetials = [
//             'email' => $request->email,
//             'password' => $request->password,
//         ];

//         if (Auth::attempt($credetials)) {
//             return redirect('/home')->with('success', 'Login berhasil');
//         }

//         return back()->with('error', 'Email atau password anda salah');
//     }

//     public function logout()
//     {
//         Auth::logout();

//         return redirect()->route('login');
//     }
// }
