import React, { useEffect, useState } from 'react'
import "../WriteBlogs/WriteUpdate.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../Context/AuthProvider'

const WriteUpdate = ({titlename}) => {
  const id = useParams().id;
  const [authUser, setAuthUser] = useAuth();
  const history = useNavigate();
  const [Blog, setBlog] = useState({title : "", desc: ""});
  const changeVal = (e) => {
    const {name, value} = e.target;
    setBlog({...Blog, [name] : value})
  }
  const submit = async () => {
    const blogData = { ...Blog, email: authUser.email };
    //console.log(Blog);
    //console.log(blogData);
    if(titlename === "write"){
      await axios.post("http://localhost:3000/api/v1/post", blogData).then((res) => {
        alert(res.data.message);
        setBlog({title : "", desc: ""});
      })
    } else {
      await axios.put(`http://localhost:3000/api/v1/updateBlog/${id}`, blogData).then((res) => {
        alert(res.data.message);
        history(`/ownblogs/${id}`);
      });
    };
  };
  useEffect(() => {
    const fetch = async () => {
      await axios.get(`http://localhost:3000/api/v1/getBlog/${id}`).then((res) => {
        const fetchedBlog = res.data.data;
        if (fetchedBlog.email !== authUser.email) {
          setIsAuthor(false); // If not, prevent updates
          alert("You are not authorized to edit this blog.");
          history(`/ownblogs/${id}`);
        } else {
          setBlog(fetchedBlog);
        }
    })
    }
    if (titlename !== "write") { // Fetch the blog only when updating
      fetch();
    }
  }, [id, authUser.email,history])
  

  return (
    <div className='container'>
      <h1>{titlename} Bloggss here</h1>
      <div className='d-flex flex-column my-5'>
                <input className='formtable p-3' type='text' name='title' placeholder='title' value={Blog.title} onChange={changeVal} />
                <textarea className='formtable p-3' name='desc' id='' cols="30" rows='8' placeholder='write your description here' value={Blog.desc} onChange={changeVal}/>
               <div className='m-4'> 
                <button className='px-3 py-2 BlogButton' onClick={submit}>{titlename}</button></div>
            </div>
        </div>
  )
}

export default WriteUpdate;