import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IoMdLock } from "react-icons/io";

const ColorSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-64 relative z-1">
      <span className="">
        <h2 className=" text-xl mt-2 mb-1">Model</h2>
      </span>

      {/*----------- Select Button------------ */}
      <div
        onClick={() => setOpen(!open)}
        className=" border px-4 rounded-md bg-white cursor-pointer flex justify-between items-center w-90 py-2"
      >
        <span className="font-bold text-md flex items-center gap-2">
          {selected ? (
            <>
              <img src={selected.img} alt="" className="w-6 h-6 bg-gray-800 rounded" />
              {selected.name}
            </>
          ) : (
            "Select Model"
          )}
        </span>

        {/*------------- Dropdown Icon---------- */}
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
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
              setSelected({
                name: "Veo 3",
                img: "https://i.ibb.co/y2sKV09/image-9.png",
              });
              setOpen(false);
            }}
            className="px-2 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/y2sKV09/image-9.png"
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
              Creates controlled visuals blending references with subjects,
              natural, and precise text or sketch edits.
            </p>
          </li>

          <hr className=" mt-4 ml-3 mr-3" />

          {/* ----------- 2nd ----------------- */}
          <li
            onClick={() => {
              setSelected({
                name: "Kling AI",
                img: "https://i.ibb.co/GfD9kWPL/image-7.png",
              });
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/GfD9kWPL/image-7.png"
                  alt=""
                  className="w-6 h-6 bg-gray-900"
                />
                <h2 className="text-xl font-bold">Kling AI</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              Fast model for quick, realistic short videos-perfect for rapid
              iterations.
            </p>
          </li>

          <hr className=" mt-4 ml-3 mr-3" />

          {/* ----------- 3rd ----------------- */}
          <li
            onClick={() => {
              setSelected({
                name: "SORA 2",
                img: "https://i.ibb.co/tgmGSW8/image-8.png",
              });
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/tgmGSW8/image-8.png"
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
              UGC-style videos that recreate the original creator’s personality,
              and everyday environment.
            </p>
          </li>

          <hr className=" mt-4 ml-3 mr-3" />

          {/* ----------- 4th ----------------- */}
          <li
            onClick={() => {
              setSelected({
                name: "Logcat AI",
                img: "https://i.ibb.co/4n8Jg58g/image-10.png",
              });
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/4n8Jg58g/image-10.png"
                  alt=""
                  className="w-6 h-6 bg-gray-900"
                />
                <h2 className="text-xl font-bold">Logcat AI</h2>
              </div>
              <div className=" bg-gray-400 p-2 rounded-xl">
                <IoMdLock size={26} />
              </div>
            </div>
            <p className=" w-80 mt-1">
              Cost-efficient for ultra-long, continuous scenes.
            </p>
          </li>


        </ul>
      )}
    </div>
  );
};

export default ColorSelector;