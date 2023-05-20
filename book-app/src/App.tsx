/**
 * Main application component.
 */

import React from 'react';

import Search from './Search';

import './App.css';

function App() {

  const onSearch = (query: string) => {
    console.log(`Got "${query}" from search component :D`);
  }

  return (
    <div className="App">
      <Search onSearch={onSearch}/>
    </div>
  );
}

export default App;
