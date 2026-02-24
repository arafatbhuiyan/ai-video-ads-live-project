import React from "react";
import { HiLightBulb } from "react-icons/hi";

const PromptInputArea = () => {
  return (
    <div>
      <div className=" flex justify-between items-center w-90 mt-2 mb-1">
        <h2 className="text-xl">Prompt</h2>
        <div className=" flex items-center">
          <HiLightBulb className=" text-yellow-400 mr-1" />
          <h4>Inspiration</h4>
        </div>
      </div>

      {/* Parent must be relative */}
      <div className="relative">
        {/* Textarea */}
        <textarea
          className="border w-90 h-35 rounded-xl resize-none px-5 py-4"
          placeholder="Please describe your creative ideas..."
        ></textarea>

        {/* Reference Image Box */}
        <label className="absolute bottom-4 left-4 cursor-pointer hover:bg-gray-400 hover:rounded-xl">
          <div className="w-17 h-17 border border-gray-600 rounded-xl flex flex-col items-center justify-center">
            <span
              className="w-6 h-6 flex items-center justify-center text-2xl border rounded-full text-center leading-none bg-gradient-to-b from-gray-800 to-gray-400 text-white mt-1"
                 
            >
              +
            </span>
            <p className="text-sm text-center mb-1">
              Reference <br />
              Image
            </p>
          </div>

          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default PromptInputArea;
