import React from 'react';
import GeToggle from './GeToggle';
import ModelSelector from './ModelSelector';
import PromptInputArea from './PromptInputArea';
import GenerateButton from './GenerateButton';

const GeneratorPanel = () => {
    return (
        <div className='ml-38'>
            <div className='text-xl font-bold mt-2 pl-2'>
                <h2>Image Generator</h2>
            </div>
            <GeToggle></GeToggle>
            <ModelSelector></ModelSelector>
            <PromptInputArea></PromptInputArea>
            <GenerateButton></GenerateButton>
        </div>
    );
};

export default GeneratorPanel;