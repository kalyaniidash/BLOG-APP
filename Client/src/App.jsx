import React from 'react';
import { Route, Routes } from 'react-router-dom'; //You're using React Router for page navigation. routes A container for all your <Route> elements. It decides which one to show.
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

const App = () => {
   
  return (
   
    <div>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path ='/Blog/:id' element ={<Blog/>}/>
      </Routes>
    </div>
    
  );
};

export default App;
