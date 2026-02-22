import { Image, SquarePlay, Video } from "lucide-react";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiVideoThin } from "react-icons/pi";

const Sidebar = () => {
  const [active, setActive] = useState("image");
  return (
    <div className="fixed top-0 left-0 w-32 h-screen border-r-2 border-gray-400">
      <div className="ml-10 mt-8 relative">
        <div className="relative ml-4 w-8 h-6 group cursor-pointer ">
          {/* Logo Image */}
          <img
            src="https://i.ibb.co/N2vtgDKg/Group-45.png"
            alt="logo"
            className="w-8 h-6 transition duration-300 group-hover:opacity-0 "
          />

          {/* Hover Icon */}
          <IoMdArrowRoundBack
            size={35}
            className="absolute inset-0 w-8 h-6 opacity-0 group-hover:opacity-100 transition duration-300 "
          />
        </div>

        {/* Video */}
        <button
          onClick={() => setActive("video")}
          className={` mt-4 py-2 px-4 rounded-xl hover:bg-gray-300 ${active === "video" ? "bg-gray-400" : " transform"}`}
        >
          <PiVideoThin size={35} />
          <span>Video</span>
        </button>
        <br />

        {/* Image */}
        <button
          onClick={() => setActive("image")}
          className={` mt-2 py-2 px-4 rounded-xl hover:bg-gray-300 ${active === "image" ? "bg-gray-400" : " transform"}`}
        >
          <CiImageOn size={35} />
          <span>Image</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
