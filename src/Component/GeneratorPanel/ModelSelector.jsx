import { ChevronDown } from "lucide-react";
import React from "react";

const ModelSelector = () => {
  return (
    <div className=" mt-5">
      <h2 className=" text-2xl mb-3">Model</h2>
      <div>
        <details className="dropdown">
          <summary className="btn !py-6 rounded-xl ">
            <div className="flex items-center gap-2 text-xl">
              <img className="" src={"https://i.ibb.co/bR5w92k2/image-9.png"} alt="" />
              Veo 3
            </div>
            <ChevronDown className=" ml-55"/>
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 w-52 shadow-sm">
            <h3 className="text-2xl">Models</h3>
            <li>
              <a>Item 1 </a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default ModelSelector;
