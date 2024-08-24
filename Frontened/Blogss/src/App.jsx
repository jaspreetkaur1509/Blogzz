import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import WriteBlogs from './Components/Pages/WriteBlogs';
import Blogs from './Components/Pages/Blogs';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
import MyBlogs from './Components/Pages/MyBlogs';
import OwnBlogs from './Components/MyBlogs/OwnBlogs';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={authUser ? <Blogs /> : <Navigate to="/signup" />} />
        <Route path='/myblogs' element={< MyBlogs/>} />
        <Route path='/writeBlogs' element={<WriteBlogs title={"write"} />} />
        <Route path='/BlogsPage/:id' element={<BlogsPage />} />
        <Route path='/ownblogs/:id' element={<OwnBlogs />} />
        <Route path='/updateblog/:id' element={<WriteBlogs title={"update"} />} />    
        <Route path='/login' element={<Login title={"login"} />} />  
        <Route path='/signup' element={<Signup title={"signup"} />} />           
      </Routes>
      <Toaster />
    </>
  );
};

export default App;