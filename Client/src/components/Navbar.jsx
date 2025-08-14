import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../contest/AppContext';
const Navbar=()=> {
  const {navigate,token} = useAppContext()
  return (
    <div className="flex items-center justify-between py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
  <img onClick={()=> navigate('/')} src= {assets.logo}alt ="logo"className='w-32 sm:w-44 cursor-pointer'/>
  <button onClick={()=> navigate('/admin')} className='flex items-center gap-2 rounderd-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
    {token ?'Dasboard' :'Login'}

    <img src={assets.arrow} alt ='arrow'className='w-3'></img>
  </button>
 
</div>

  ) 
}

export default Navbar