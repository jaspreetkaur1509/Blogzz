import React from 'react'
import '../Login/Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast'

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
       // console.log(data);
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password,
          }
          await axios.post("http://localhost:3000/api/v1/user/signup",userInfo)
          .then((res) => {
            console.log(res.data);
            if(res.data){
                //alert('signup successfull');
                toast.success("Signup successfull");
                navigate(from,{replace : true});
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }).catch((err) => {
            if(err.response){
              //alert("Error: " + err.response.data.message);
              toast.error("Error: " + err.response.data.message);
            }
          });
      }
    
  return (
    <>
   <div className='d-flex justify-content-center align-items-center model'>
    <form onSubmit={handleSubmit(onSubmit)} className='border w-25 p-5 position-relative'>
      <Link className='position-absolute  top-0 end-0 m-2 cross' to="/">X</Link>
      <h2 className='text-center'>Signup</h2>
      <div>
        <p className='mt-2'>Name</p>
        <input type='name' placeholder='Enter your name...'
         {...register("fullname", {required:true})}
         />
         <br />
         {errors.fullname && <span className='warning'>Name is required</span>}
      </div>
      <div>
        <p className='mt-2'>Email</p>
        <input type='email' placeholder='Enter your Email...'
         {...register("email", {required:true})}
         />
         <br />
         {errors.email && <span className='warning'>Email is required</span>}
      </div>
      <div>
        <p className='mt-2'>Password</p>
        <input type='password' placeholder='Enter your Password...'
          {...register("password", {required:true})}
         />
          <br/>
          {errors.password && <span className='text-sm warning'>Password is required</span>}
      </div>
      <div>
      <button type="submit" class="mt-3 btn btn-warning text-white">SignIn</button>
      </div>
    </form>
   </div>
   </>
  )
}

export default Signup