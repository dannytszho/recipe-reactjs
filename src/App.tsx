import React from 'react';
import { Nav } from './layouts/Nav';

import { CuisineCategory } from './components/CuisineCategory';
import { Recipes } from './components/Recipes';

function App() {
  return (
    <div className="flex flex-col mx-40 bg-black min-h-screen">
      <header>
        <Nav />
      </header>
      <CuisineCategory />
      <Recipes />
    </div>
  );
}

export default App;
