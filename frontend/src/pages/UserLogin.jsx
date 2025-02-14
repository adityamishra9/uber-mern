import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email, password });
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />        
        <form onSubmit={submitHandler}>
        <h3 className='text-xl font-medium mb-2'>What's your email?</h3>
        <input 
        required type="email" 
        placeholder="email@example.com" 
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input 
        required type="password" 
        placeholder="password" 
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' 
        value={password}
        onChange={(p)=>{setPassword(p.target.value)}}
        />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Login</button>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create account</Link></p>
        </form>
      </div> 
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as a Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin