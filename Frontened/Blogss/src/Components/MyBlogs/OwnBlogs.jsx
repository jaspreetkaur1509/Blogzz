import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';
import "../BlogsPage/BlogsPage.css"

const OwnBlogs = () => {
    const id = useParams().id;
    const [Blogs, setBlogs] = useState([]);
    //console.log(id);
    useEffect(() => {
      const fetch =  async () => {
        await axios.get(`http://localhost:3000/api/v1//getBlog/${id}`).then((res) => {
          console.log(res.data.data);
            setBlogs(res.data.data);
        })
      }
      fetch();
    }, [id])
    
  return (
    <div className='page container'>
        <div className='my-3'>
        <Link to={`/updateblog/${Blogs._id}`} className='d-flex justify-content-end editor'>
            <MdEditSquare />
            </Link>
        {Blogs && 
            <>
            <h1 className='mt-2'>{Blogs.title}</h1>
            <p className='blogsPagep mt-3'>{Blogs.desc}</p>
            </>
            }    
        </div>
    </div>
  )
}

export default OwnBlogs