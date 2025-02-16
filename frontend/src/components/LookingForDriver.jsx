import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%]'
        onClick={() => {
            props.setVehicleFound(false)
        }}
        ><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>

      <h3 className='text-xl font-semibold mb-5'>Looking for nearby driver</h3>

      <div className='flex flex-col justify-between items-center gap-2'>
        <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUzM52yYFb13v2VMde12x6WOl8tngXcMJ139O2AHgpt6cv4RFv_8CtyMCYZerfaTizSw&usqp=CAU" alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-4 p-3 border-b border-gray-200'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-8</h3>
              <p className='text-sm text-gray-600 -mt-1'>Karbala Talab, Raipur</p>
            </div>
          </div>
          <div className='flex items-center gap-4 p-3 border-b border-gray-200'>
            <i className="ri-user-location-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-8</h3>
              <p className='text-sm text-gray-600 -mt-1'>Karbala Talab, Raipur</p>
            </div>
          </div>
          <div className='flex items-center gap-4 p-3 border-b border-gray-200'>
            <i className="ri-cash-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm text-gray-600 -mt-1'>Cash</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LookingForDriver