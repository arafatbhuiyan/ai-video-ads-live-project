import React, { useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { PiTextTFill } from 'react-icons/pi';

const GeToggle = () => {
    const[toggle, setToggle] = useState('A')
    return (
        <div className='mt-6'>
            <div className=' border-2 border-gray-300 rounded-xl inline-flex px-4 py-3'>
                <button
                onClick={()=>setToggle("A")}
                className={` flex items-center border px-5 py-2 rounded mr-2 border-none cursor-pointer ${toggle==="A" ? "bg-gray-500" : "transform"}`}> <PiTextTFill />Text to image</button>

                <button
                onClick={()=> setToggle("B")}
                className={`flex items-center border px-5 py-2 rounded border-none cursor-pointer ${ toggle === "B" ? "bg-gray-500 " : "transform"}`}><CiImageOn /> Image to image</button>
            </div>
            
        </div>
    );
};

export default GeToggle;