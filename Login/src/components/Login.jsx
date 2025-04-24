import React from 'react'
import { Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center font-bold text-2xl mb-6">Welcome to Login Page</h1>
        
        <input 
          type="email" 
          placeholder="email@site.com" 
          required
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        
        <input 
          type="password" 
          required 
          placeholder="Password" 
          minLength="8" 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
          className="w-full p-3 border border-gray-300 rounded-md mb-6"
        />
        
        
        <button className="p-3 bg-blue-500 text-white rounded-md mb-4">Login</button>
        <br/>
        Doesn't Have a Account?
        <Link to="/register">
          Register
        </Link>
        
      </div>
    </div>
  )
}
