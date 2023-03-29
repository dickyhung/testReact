import React, { useEffect, useState } from 'react'
import './Template.css'
import axios from 'axios'

export default function AboutUs() {
  const [tulisan, setTulisan] = useState('');
  const url = "http://localhost:3001/tulisan/2";

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
  );
  
}