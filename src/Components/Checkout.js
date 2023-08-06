import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react'
import Prodes from "./Prodes";
const options = {
  method: 'GET',
  url: 'https://shoes-collections.p.rapidapi.com/shoes/3',
  headers: {
    'X-RapidAPI-Key': '6b08072726msh9e769c75bc000d1p136426jsn2db878e18a11',
    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  }
};
function Checkout() {
  const [shoes, setShoes] = useState()
  useEffect(() => {
    const response = axios.request(options);
    setShoes((response) => response.shoes)
    console.log(response.data);
  }, [])

  return (
    <div>
      <h1 className='d-flex justify-content-center mx-auto'>All Products</h1>
      <div className='element'>
        <div className='container my-5'>
          <div className='row'>
            {shoes.map((elem) => {
              return (
                <div className='col-md-3 my-2' key={elem.id}>
                  <div className='col-md-4'>
                    <Prodes title={elem.titles} image={elem.image} description={elem.description} price={elem.price} />
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;