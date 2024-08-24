import React from 'react'
import { useAuth } from '../../Context/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    // const navigate = useNavigate();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser, user: null
            })
            localStorage.removeItem("Users");
            toast.success("logout successfully");
            window.location.reload();
            // navigate("/login");
            setTimeout(() => {
              }, 3000)
        } catch (error) {
            toast.error("Eroor: " + error.message)
            setTimeout(() => {}, 3000)
        }
    }
  return (
    <>
       <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout