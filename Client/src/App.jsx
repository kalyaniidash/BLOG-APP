import React from 'react';
import { Route, Routes } from 'react-router-dom'; //You're using React Router for page navigation. routes A container for all your <Route> elements. It decides which one to show.
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import Comments from './pages/admin/Comments';
import ListBlog from './pages/admin/ListBlog';
import Login from './components/admin/Login';
import { useState } from 'react';
import 'quill/dist/quill.snow.css' 
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './contest/AppContext';
// react-hot-toast install
const App = () => {
const [isAuthenticated, setIsAuthenticat] = useState(true);
const {token} = useAppContext();
  return (
    
    <div>
      <Toaster/>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path ='/Blog/:id' element ={<Blog/>}/>
      <Route path="/admin" element={token ? <Layout /> : <Login />} >
            <Route index element={<Dashboard/>} />
            <Route path ='addBlog'  element={<AddBlog/>} />
            <Route path ='listBlog'  element={<ListBlog/>} />
            <Route path ='comment'  element={<Comments/>} />
        </Route>
      </Routes>
    </div>
    
  );
};

export default App;
