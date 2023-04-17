import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function register(e){
      e.preventDefault();
      try {
        await axios.post('register', {username, password}).then(
          console.log("hogaya")
        )
      } catch (err) {
        if (err) console.log("Register.jsx me dikkat hai");
      }
    }
  return (
    <div className='bg-blue-100 h-screen flex items-center'>
      <form className="w-[330px] mx-auto" onSubmit={register}>
        <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Username' className='block w-full rounded-sm p-2 mb-4 border' />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='block w-full rounded-sm p-2 mb-4 border' />
        <button className='bg-blue-500 text-white block w-full rounded-sm p-2 hover:bg-blue-600 transition-all ease-in-out  '>Register</button>
      </form>
    </div>
  )
}

export default Register
