import React, { useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { PiTextTFill } from 'react-icons/pi';

const GeToggle = () => {
    const[toggle, setToggle] = useState('A')
    return (
        <div className='flex items-center mt-3 border w-90 rounded'>
            <div className=' inline-flex px-3 py-1 text-sm'>
                <button
                onClick={()=>setToggle("A")}
                className={` flex items-center border px-7 py-1 rounded mr-2 border-none cursor-pointer ${toggle==="A" ? "bg-gray-500" : "transform"}`}> <PiTextTFill />Text to image</button>

                <button
                onClick={()=> setToggle("B")}
                className={`flex items-center border px-7 py-1 rounded border-none cursor-pointer ${ toggle === "B" ? "bg-gray-500 " : "transform"}`}><CiImageOn /> Image to image</button>
            </div>
            
        </div>
    );
};

export default GeToggle;