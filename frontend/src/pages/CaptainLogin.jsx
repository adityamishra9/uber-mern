import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = ({ email, password });
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain/start');
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
        <p className='text-center'>Join a fleet, <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div> 
      <div>
        <Link to='/login' className='bg-[#f3c164] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin