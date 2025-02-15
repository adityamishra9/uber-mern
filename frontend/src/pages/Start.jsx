import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Start = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
        })
        gsap.to(panelCloseRef.current, {
            duration: 0,
            opacity: 0
        })
    }
}, [ panelOpen ])

  return (
    <div className='hscreen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div>
        <img className='h-screen w-screen' src="https://miro.medium.com/v2/resize:fit:648/1*FuBgpXnVJDArxTVXqn802Q.png" alt="" />
      </div>

      <div className='absolute top-0 h-screen w-full flex flex-col justify-end'>
        <div className='h-[30%] p-6 bg-white relative'>

        <h5 ref={panelCloseRef}
        className='absolute top-6 text-2xl right-6'
        onClick={() => setPanelOpen(false)}>
          <i className="ri-arrow-down-s-line"></i>
        </h5>

        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {submitHandler()}}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
          <input 
          onClick={() => setPanelOpen(true)}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
          type="text" 
          placeholder='Add a pick-up location'
          value={pickUp}
          onChange={(e) => {setPickUp(e.target.value)}}
          />
          <input 
          onClick={() => setPanelOpen(true)}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
          type="text" 
          placeholder='Enter your destination'
          value={destination}
          onChange={(e) => {setDestination(e.target.value)}}
          />
        </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
        <h3 className='text-xl font-semibold mb-5'>Choose a vehicle</h3>
        <div className='flex w-full items-center justify-between active:border-2 rounded-xl p-3 mt-2'>
          <img className='h-14 w-15 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUzM52yYFb13v2VMde12x6WOl8tngXcMJ139O2AHgpt6cv4RFv_8CtyMCYZerfaTizSw&usqp=CAU" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='text-base font-medium'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='text-sm font-medium'>2 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>

        <div className='flex w-full items-center justify-between active:border-2 rounded-xl p-3 mt-2'>
          <img className='h-14 w-15 object-cover' src="data:image/jpeg;base64,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" alt="" />
          <div className='w-1/2'>
            <h4 className='text-base font-medium'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='text-sm font-medium'>7 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable, Motorcycle ride</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.30</h2>
        </div>

        <div className='flex w-full items-center justify-between active:border-2 rounded-xl p-3 mt-2'>
          <img className='h-14 w-15 object-cover' src="data:image/jpeg;base64,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" alt="" />
          <div className='w-1/2'>
            <h4 className='text-base font-medium'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='text-sm font-medium'>3 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable, Auto ride</p>
          </div>
          <h2 className='text-xl font-semibold'>₹116.78</h2>
        </div>
      </div>
    </div>
  )
}

export default Start