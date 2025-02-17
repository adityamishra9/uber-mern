import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
       <h5
       onClick={() => {props.setFinishRidePanel(false)}}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
      </h5>

      <h3 className="text-xl font-semibold mb-5">Finish this Ride!</h3>

      <div className='flex items-center justify-between p-3 bg-orange-200 rounded-lg mt-4'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
            <h2 className='text-lg font-medium'>Harsha Patel</h2>
        </div>
        <h5>2.2KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-4 p-3 border-b border-gray-200">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-8</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Karbala Talab, Raipur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border-b border-gray-200">
            <i className="ri-user-location-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-8</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Karbala Talab, Raipur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border-b border-gray-200">
            <i className="ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>
        <div className='mt-6 w-full'>
            <Link
                to={'/captain/start'}
              className="flex justify-center items-center w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
            >
              Complete Ride
            </Link>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
