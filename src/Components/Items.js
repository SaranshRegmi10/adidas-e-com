import React from 'react'

function Items(props) {
    let { titles, price, description, category, image}=props;
    return (
        <div>
            <div className='container'>
                <div className="card h-100 text-center" style={{ width: '20rem' }}>
                    <img src={image} className="card-img-top" alt="adidas" style={{height: '18rem' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{titles}</h5>
                        <p className="card-description">{description}</p>
                        <p className='card-description'>Price:${price}</p>
                        <p className='card-description'>Category:{category}</p>
                        {/* <p className='card-description'>Rating{rating}</p> */}
                        <a href="/" className="btn btn-primary mx-2">Buy Now</a>
                        <a href='/' className='btn btn-primary mx-2'>Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items
