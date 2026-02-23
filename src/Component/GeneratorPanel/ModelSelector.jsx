import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IoMdLock } from "react-icons/io";

const ColorSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(" ");

  return (
    <div className="w-64 relative">
      <span className="">
        <h2 className=" text-2xl mt-3 mb-2">Model</h2>
      </span>
      {/*----------- Select Button------------ */}
      <div
        onClick={() => setOpen(!open)}
        className=" border px-4 py-2 rounded-md bg-white cursor-pointer flex justify-between items-center w-90 py-4"
      >
        <span className=" font-bold">{selected}</span>

        {/*------------- Dropdown Icon---------- */}
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          size={26}
        />
      </div>

      {/*-------- Dropdown List---------- */}
      {open && (
        <ul className="absolute left-0 w-90 mt-2 border rounded-md bg-white shadow-md">
          <span>
            <h2 className=" ml-3 mt-2 text-2xl ">Models</h2>
            <hr className=" mt-4 ml-3 mr-3" />
          </span>
          {/* ----------- 1st ----------------- */}
          <li
            onClick={() => {
              setSelected("Veo 3");
              setOpen(false);
            }}
            className="px-2 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={"https://i.ibb.co/N2vtgDKg/Group-45.png"}
                  alt=""
                  className="w-6 h-6"
                />
                <h2 className="text-xl font-bold">Veo 3</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              Creates controlled visuals blending references with subjects, na
              natural, and precise text or sketch edits.
            </p>
          </li>
          <hr className=" mt-4 ml-3 mr-3" />
          {/* ----------------------------------- */}

          <li
            onClick={() => {
              setSelected("Kling AI");
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={"https://i.ibb.co/N2vtgDKg/Group-45.png"}
                  alt=""
                  className="w-6 h-6"
                />
                <h2 className="text-xl font-bold">Kling AI</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              Fast model for quick, realistic short
              videos-perfect for rapid iterations.
            </p>
          </li>
          <hr className=" mt-4 ml-3 mr-3" />
          {/* -------------------------------------------- */}
          <li
            onClick={() => {
              setSelected("SORA 2");
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={"https://i.ibb.co/N2vtgDKg/Group-45.png"}
                  alt=""
                  className="w-6 h-6"
                />
                <h2 className="text-xl font-bold">SORA 2</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              UGC-style videos that recreate the 
              original creator’s personality, and
              everyday environment.
            </p>
          </li>
          <hr className=" mt-4 ml-3 mr-3" />
          {/* ------------------------------------------ */}
          <li
            onClick={() => {
              setSelected("Logcat AI");
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={"https://i.ibb.co/N2vtgDKg/Group-45.png"}
                  alt=""
                  className="w-6 h-6"
                />
                <h2 className="text-xl font-bold">Logcat AI</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              Cost-efficient for ultra-long, continuous
              scenes.
            </p>
          </li>
          <hr className=" mt-4 ml-3 mr-3" />
        </ul>
      )}
    </div>
  );
};

export default ColorSelector;
