import React from 'react'
import '../Login/Login.css'
import {useForm} from 'react-hook-form'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    //console.log(data);
    const userInfo = {
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:3000/api/v1/user/login", userInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data){
        //alert("login successfull");
        toast.success("login successfullyy");
        setTimeout(() => {
          navigate('/'); 
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user))
        }, 1000);
      }
        }).catch((err) => {
            if(err.response){
              //alert("Error: " + err.response.data.message);
              toast.error("Error: " + err.response.data.message);
              setTimeout(() => {}, 1000);
        }
    });
  }

  return (
   <>
   <div className='d-flex justify-content-center align-items-center model modal-container' id='my_modal_3'>
    <form onSubmit={handleSubmit(onSubmit)} className='border w-25 p-5 position-relative'>
      <Link className='position-absolute  top-0 end-0 m-2 cross' to="/">X</Link>
      <h2 className='text-center'>Login</h2>
      <div>
        <p className='mt-2'>Email</p>
        <input type='email' placeholder='Enter your Email...'
          {...register("email", {required:true})}
         />
         <br />
         {errors.email && <span className='warning'>email is required</span>}
      </div>
      <div>
        <p className='mt-2'>Password</p>
        <input type='password' placeholder='Enter your Password...'
         {...register("password", {required:true })}
         />
         <br/>
         {errors.password && <span className='warning'>password is required</span>}
      </div>
      <div>
      <button class="mt-3 btn btn-warning text-white">Login</button>
        <p className='mt-2'>Not registered?{" "} <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Sign Up</Link></p>
      </div>
    </form>
   </div>
   </>
  );
}

export default Login;