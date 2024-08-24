import React, { useState , useEffect} from 'react'
import "../Home/Page1.css"

const Page1 = () => {
  const [UserName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('Users'));
    if (user) {
      setUserName(user.fullname); 
    }
  }, []);
  return (
    <div className='home_pg1 page container d-flex justify-content-center align-items-center'>
        <div className='page1-container p-5'>
            <h1>Create Blog with {UserName || 'Blogzz'}</h1>
        </div>
    </div>
  );
};

export default Page1;