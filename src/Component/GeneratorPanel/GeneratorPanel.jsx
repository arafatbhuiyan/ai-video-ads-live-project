import React from 'react';
import GeToggle from './GeToggle';
import ModelSelector from './ModelSelector';

const GeneratorPanel = () => {
    return (
        <div className='ml-38'>
            <div className='text-2xl font-bold mt-5 pl-2'>
                <h2>Image Generator</h2>
            </div>
            <GeToggle></GeToggle>
            <ModelSelector></ModelSelector>
        </div>
    );
};

export default GeneratorPanel;