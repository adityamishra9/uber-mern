import React from "react";

const waitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
      </h5>

      <div className="flex items-center justify-between ">
        <img
          className="h-14 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUzM52yYFb13v2VMde12x6WOl8tngXcMJ139O2AHgpt6cv4RFv_8CtyMCYZerfaTizSw&usqp=CAU"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Aditya</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">CG 04 MJ 0001</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
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
      </div>
    </div>
  );
};

export default waitingForDriver;
