import React, { useEffect, useState } from 'react'
import './Template.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default function Home() {

  const [tulisan, setTulisan] = useState('');
  const url = "http://localhost:3001/tulisan/1";

  useEffect(()=>{
    axios.get(url).then((response) => {
      setTulisan(response.data);
    });
  },[]);

  if (!tulisan) return null;
    return (
      <div className='isi d-flex justify-content-center align-items-center text-white'>
        <h1>{tulisan.line}</h1>
      </div>
    )
  
}