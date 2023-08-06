import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Items from './Items';
import PropTypes from 'prop-types'
import Category from './Category'

function Product(props) {

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  // const [selectedItem, setSelectedItem] = useState(null);

  let apiurl=value; 

  let url = "https://fakestoreapi.com/products"+ apiurl;
  
  

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => console.error(error));
  }, [url])


  return (
    <div>
     <h1 className='d-flex justify-content-center mx-auto'>All Products</h1>
    <Category setValue={setValue}/>
      <div className='element'>
        <div className='container my-5'>
          <div className='row'>
                  {data.map((element) => {
            return (
              <div className='col-md-3 my-2' key={element.id}>
                <div className='col-md-4'>
                <Items title={element.titles} image={element.image} description={element.description} price={element.price} category={element.category} rating={element.rating.count}/>
                </div>
              </div>)
          })}
          </div>
        </div>
        
      </div>
  {/* {selectedItem && <SingleProductpage selectedItem={selectedItem} />} */}
    </div>
  )
}

Product.defaultProps={
  category:'laptops'
}
Product.propTypes={
  category:PropTypes.string
}


export default Product
