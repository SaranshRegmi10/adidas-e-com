import React from 'react'
import { Link } from 'react-router-dom'

function ImageCompt(props){
  const {image}= props;
  return(
    <>
    {image}
     </>
  );
}

function Navbar() {
  const image=<img src='adidas.png' alt='adidas'/>
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand-active nav-link" to="/><ImageCompt image={image}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
             
             <div className='d-flex mx-auto justify-content-center'>
            <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/Product'>Collections</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Detail'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Contact'>Contact</Link>
              </li>
    </div>
            </ul>

            {/* <div className='container-fluid'>
              <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div> */}

            <button type='button' className='btn' >
              <Link className='nav-link' to='/Login'><i className='fa-solid fa-user fa-bounce'></i> Login</Link>
            </button>

            <button type="button" className="btn">
              <Link className='nav-link' to="/Checkout"><i className="fa-solid fa-cart-shopping fa-bounce"></i>Checkout</Link>
            </button>

            <button type="button" className="btn">
              <Link className='nav-link' to="/NewAccount"><i className="fa-solid fa-right-to-bracket fa-bounce"></i> Register</Link>
            </button>

          </div>
        </div>
      </nav>
    </div>
  )
}



export default Navbar
