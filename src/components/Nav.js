import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Nav() {
  return (
    <>
    <nav className='navbar navbar-expand-lg bg-success d-flex justify-content-between ps-5 text-white'>
      <div>
        Cobain React.JS
      </div>
      <div className='d-flex align-items-center text-decoration-none pe-5'>
        <Link to='/logged-in/home'>
          <div className='me-4 text-white'>Home</div>
        </Link>
        <Link to='/logged-in/about'>
          <div className='me-4 text-white'>About Us</div>
        </Link>
        <Link to='/'>
          <div className='btn btn-sm btn-danger text-white'>Sign Out</div>
        </Link>
      </div>
    </nav>
    

    <Outlet/>
    </>
  )
}
