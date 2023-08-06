import { useState,useEffect } from "react";
import React from 'react'
const options = {
  method: 'GET',
  url: 'https://shoes-collections.p.rapidapi.com/shoes/3',
  headers: {
    'X-RapidAPI-Key': '6b08072726msh9e769c75bc000d1p136426jsn2db878e18a11',
    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  }
};
function Outlets() {
  const [shoes, setShoes] = useState()
  useEffect(() => {
    const response = axios.request(options);
	console.log(response.data);
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div>
        <h1>We are currently available in three places</h1>
        <u1>
            <li>Durbar Marg</li>
            <li>Labim Mall,Pulchock</li>
            <li>Boudha</li>
        </u1>


    </div>
  )
}

export default Outlets