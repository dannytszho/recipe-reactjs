import React from 'react';
import { Nav } from './layouts/Nav';

function App() {
  return (
    <div className='flex flex-col mx-40 bg-black'>
        <header>
            <Nav />
        </header>
        <div className='text-3xl font-bold underline text-red-300'>Recipe</div>
        
    </div>
)
}

export default App;
