import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Pages/Blogs.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

const MyBlogs = () => {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);

    const [Blogs, setBlogs] = useState([]);
    const email = authUser?.email;
    // const email = JSON.parse(localStorage.getItem("Users"))?.email;
    // const userId = JSON.parse(localStorage.getItem("Users"))?._id;
    console.log(email);
    useEffect(() => {
        const fetch = async () => {
            const response =  await axios.get("http://localhost:3000/api/v1/getAll");
            const allBlogs = response.data.data;
            console.log("All Blogs: ", allBlogs);
            const filterData = allBlogs.filter(blog => blog.email === authUser.email);
            console.log(filterData);
            setBlogs(filterData);
        }
        if (email) {
            fetch();
        } else {
            console.error("No user ID found in localStorage");
        }
    }, [email]);
      
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center my-5'>
            {Blogs && Blogs.map((item, i) => 
            <div key={i} className='col-lg-3 blockCard m-3 p-3'>
                <Link className='linkBlog' to={`/OwnBlogs/${item._id}`}>
                <h2 className='decor'>{item.title}</h2>
                {/* <p className='decor'>{item.email}</p> */}
                </Link>
                <p>{item.desc.slice(0, 250)}....</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default MyBlogs