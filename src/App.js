import React, {useState, useEffect} from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from '././Components/Pages/Home';
import Buy from '././Components/Pages/Buy';

function App() {
	
  return (
    <div className="App">
	
		  <BrowserRouter>
			<Routes>
				  <Route path="/" element={<Home/>} />
				  <Route index  path="exchange" element={<Buy/>} />
			</Routes>
		  </BrowserRouter>
	</div>
  );
}

export default App;
