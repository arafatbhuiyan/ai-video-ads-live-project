import { Image, SquarePlay, Video } from "lucide-react";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { PiVideoThin } from "react-icons/pi";

const Sidebar = () => {
    const[active, setActive] = useState(Image)
  return (
    <div>
      <div className="ml-10 mt-8 flex flex-col gap-5">
        {/* Logo */}
        <img
          className="w-8 h-6"
          src="https://i.ibb.co/N2vtgDKg/Group-45.png"
          alt="logo"
        />

        {/* Video */}
        <button
        onClick={()=> setActive(Video)}
        className={`flex flex-col items-start gap-0 mt-3 ${!active? "bg-gray-400" : " transform" }`}>
          <PiVideoThin size={35} />
          <span>Video</span>
        </button>

        {/* Image */}
        <button className={`flex flex-col items-start gap-0 ${!active ? "bg-gray-400" : " transform"}`}>
          <CiImageOn size={35} />
          <span>Image</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
