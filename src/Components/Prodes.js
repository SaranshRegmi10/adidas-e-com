import React from 'react'

function Prodes(props) {
    let { name,image,description,price,quantity}=props;
    return (
        <div>
            <div className='container'>
                <div className="card h-100 text-center" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="adidas" style={{height: '18rem' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-description">{description}</p>
                        <p className='card-description'>Price:${price}</p>
                        <p className='card-description'>Quantity:${quantity}</p>
                        {/* <p className='card-description'>Rating{rating}</p> */}
                        <a href="/" className="btn btn-primary mx-2">Buy Now</a>
                        <a href='/' className='btn btn-primary mx-2'>Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prodes
