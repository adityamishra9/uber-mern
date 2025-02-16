import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainStart = (props) => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
  const [confirmRidePopUpPanel, setconfirmRidePopUpPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(
      function () {
        if (ridePopUpPanel) {
          gsap.to(ridePopUpPanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(ridePopUpPanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      },
      [ridePopUpPanel],
);

  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link to={'/captain-login'} className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:648/1*FuBgpXnVJDArxTVXqn802Q.png"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-12 translate-y-full">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopUpPanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-12 ">
        <ConfirmRidePopUp setconfirmRidePopUpPanel={setconfirmRidePopUpPanel} />
      </div>
    </div>
  );
};

export default CaptainStart;
