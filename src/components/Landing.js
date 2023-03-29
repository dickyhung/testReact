import React from 'react'
import './Template.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='isi d-flex justify-content-center align-items-center text-white'>
        <div className='me-3'>
            Ini Adalah Landing Page.
        </div>
        <Link to='/login'>
            <div className='btn btn-success'>
                klik Untuk Login
            </div>
        </Link>
    </div>
  )
}
