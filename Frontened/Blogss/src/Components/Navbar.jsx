import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider.jsx'
import Logout from './Login/Logout.jsx'

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <b>BLOGZZ</b>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myblogs">MyBlogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/writeBlogs">Write Blogs</Link>
        </li>
      {
        authUser ? <Logout /> :
        <li className="nav-item">
        <Link className="nav-link bg-black text-white px-3 py-2 font-bold rounded mx-2" to="/login">Login</Link>
    </li>
      }
      </ul>
    </div>
  </div>
</nav>
<hr />
    </div>
  )
}

export default Navbar