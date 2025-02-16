import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/lookingForDriver'
import WaitingForDriver from '../components/waitingForDriver'

const Start = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehiclePanel, setVehiclePanel] = useState(false)

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

  useGSAP(function () {
      if (vehiclePanel) {
          gsap.to(vehiclePanelRef.current, {
              transform: 'translateY(0)'
          })
      } else {
          gsap.to(vehiclePanelRef.current, {
             transform: 'translateY(100%)'
          })
      }
  }, [ vehiclePanel ])

  useGSAP(function () {
    if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmRidePanelRef.current, {
           transform: 'translateY(100%)'
        })
    }
    }, [ confirmRidePanel ])

  useGSAP(function () {
    if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehicleFoundRef.current, {
           transform: 'translateY(100%)'
        })
    }
    }, [ vehicleFound ])

  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
    }, [ waitingForDriver ])

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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />  
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}  setVehicleFound={setVehicleFound} />  
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-12 translate-y-full'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  )
}

export default Start