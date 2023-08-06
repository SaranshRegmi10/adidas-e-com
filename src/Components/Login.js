import React from 'react'
import { Link } from 'react-router-dom'
// import ImageCompt from './Navbar'

function Login(props) {
  return (
    <div>
      <div className='Login-container'>
        <div className='Login-content'>
       <img src='adidas.png' alt='adidas'></img>
       {/* <ImageCompt image={props.picture}/> */}
          <h2>LOG-IN</h2>
          <div className='form-control'>
            <form className='mx-auto'>

              <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required/>

              <button type="submit" className="btn btn-secondary mb-2 mh-3" id='submit-btm'>Login <i className="fa-solid fa-right-to-bracket"></i></button>
            </form>
          </div>
          <Link className="nav-link" id='sign-in' to='/NewAccount'>Create New Account</Link>
          <Link className='nav-link' id='sign-in' to='/PasswordForget'>Forget Password</Link>
        </div>
        <button type="submit" className="btn btn-primary btn-lg mb-3" id='facebook' href="/">Login with <i className="fa-brands fa-facebook"></i></button>
        <button type="submit" className="btn btn-danger btn-lg" id='facebook' href="/">Login with <i className="fa-brands fa-google"></i></button>
      </div>
    </div>
  )
}
export default Login
