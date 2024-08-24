import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Blogs.css';
const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios.get("http://localhost:3000/api/v1/getAll").then((res) => 
        setBlogs(res.data.data));
    }
    fetch();
  }, [])
  
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center my-5'>
        {Blogs && Blogs.map((item, i) => <div className='col-lg-3 blockCard m-3 p-3'>
          <Link className='linkBlog' to={`/BlogsPage/${item._id}`}>
          <h2 className='decor'>{item.title}</h2>
          </Link>
          <p>{item.desc.slice(0,300)}...</p>
        </div>)}
      </div>
    </div>
  )
}

export default Blogs