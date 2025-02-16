import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {
    
    const locations = [
        "Radhe Shyam Cafe",
        "Kapoor's Cafe",
        "Radhe Radhe",
        "Kapoor's Cafe",
        "Radhe Radhe",
    ]

  return (
    <div>
        {
            locations.map(function(elem, idx){
                return (
                    <div key={idx} className='flex mb-2 border-2 p-3 border-white active:border-black rounded-xl justify-start items-center gap-2'
                    onClick={() => {props.setVehiclePanel(true)
                        props.setPanelOpen(false)}
                    }>
                        <h2><i className="ri-map-pin-2-fill p-2 bg-[#eee] rounded-full mr-1"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LocationSearchPanel