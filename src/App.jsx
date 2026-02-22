import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import GeneratorPanel from './Component/GeneratorPanel/GeneratorPanel';

const App = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <GeneratorPanel></GeneratorPanel>
    </div>
  );
};

export default App;