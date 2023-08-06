import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='ufooter'>
          <div className='col-1'>
            <h6>Products</h6>
            <br />
            <Link className='foot-link' to="/Home">Shoes</Link>
            <Link className='foot-link' to="/Home">Clothing</Link>
            <Link className='foot-link' to="/Home">Accessories</Link>
            <br />
            <Link className='foot-link' to="/Home">New Arrival</Link>
            <Link className='foot-link' to="/Home">Best Seller</Link>
            <Link className='foot-link' to="/Home">Release dates</Link>
            <Link className='foot-link' to="/Home">Sale</Link>
          </div>
          <div className='col-2'>
            <h6>Sports</h6>
            <br />
            <Link className='foot-link' to="/Home">Footbal</Link>
            <Link className='foot-link' to="/Home">Running</Link>
            <Link className='foot-link' to="/Home">Basketball</Link>
            <Link className='foot-link' to="/Home">Outdoor</Link>
            <Link className='foot-link' to="/Home">Golf</Link>
            <Link className='foot-link' to="/Home">Baseball</Link>
            <Link className='foot-link' to="/Home">Tennis</Link>
            <Link className='foot-link' to="/Home">Skating</Link>
            <Link className='foot-link' to="/Home">Traninig</Link>
          </div>

          <div className='col-3'>
            <h6>Collections</h6>
            <br />
            <Link className='foot-link' to="/Home">adicolor</Link>
            <Link className='foot-link' to="/Home">Ultraboost</Link>
            <Link className='foot-link' to="/Home">NMD</Link>
            <Link className='foot-link' to="/Home">Forum</Link>
            <Link className='foot-link' to="/Home">SuperStar</Link>
            <Link className='foot-link' to="/Home">Running Shoes</Link>
            <Link className='foot-link' to="/Home">adilette</Link>
            <Link className='foot-link' to="/Home">Stan Smith</Link>
            <Link className='foot-link' to="/Home">adizero</Link>
            <Link className='foot-link' to="/Home">Trio</Link>
            <Link className='foot-link' to="/Home">EQT</Link>
          </div>
          <div className='col-4'>
            <h6>Support</h6>
            <br />
            <Link className='foot-link' to="/Home">Help</Link>
            <Link className='foot-link' to="/Home">Return and Exchange</Link>
            <Link className='foot-link' to="/Home">Shipping</Link>
            <Link className='foot-link' to="/Home">Order Tracker</Link>
            <Link className='foot-link' to="/Home">Store Locator</Link>
            <Link className='foot-link' to="/Home">Size Chart</Link>
            <Link className='foot-link' to="/Home">Gift Card Balance</Link>
            <Link className='foot-link' to="/Home">How To Clean</Link>
            <Link className='foot-link' to="/Home">Breathing from Running</Link>
            <Link className='foot-link' to="/Home">Promotions</Link>
          </div>
          <div className='col-5'>
            <h6>Company Info</h6>
            <br />
            <Link className='foot-link' to="/Home">About us</Link>
            <Link className='foot-link' to="/Home">Student Discount</Link>
            <Link className='foot-link' to="/Home">Millitary and Healthcare</Link>
            <Link className='foot-link' to="/Home">Discount</Link>
            <Link className='foot-link' to="/Home">adidas Stories</Link>
            <Link className='foot-link' to="/Home">adidas app</Link>
            <Link className='foot-link' to="/Home">Sustainability</Link>
            <Link className='foot-link' to="/Home">adiclub</Link>
            <Link className='foot-link' to="/Home">Affilitie</Link>
            <Link className='foot-link' to="/Home">Press</Link>
            <Link className='foot-link' to="/Home">Carrer</Link>
            <Link className='foot-link' to="/Home">California Transparency</Link>
            <Link className='foot-link' to="/Home">in Supply Chains Act</Link>
            <Link className='foot-link' to="/Home">Responsive Disclosure</Link>
            <Link className='foot-link' to="/Home">Transparency in</Link>
            <Link className='foot-link' to="/Home">Coverage</Link>
            <Link className='foot-link' to="/Home">Country Selector</Link>
          </div>
          <div className='col-6'>
            <h6>Follow Us</h6>
            <br />
            <Link className='foot-link'><i className="fa-brands fa-facebook"></i></Link>
            <Link className='foot-link'><i className="fa-brands fa-instagram"></i></Link>
            <Link className='foot-link'><i className="fa-brands fa-twitter"></i></Link>
            <Link className='foot-link'><i className="fa-brands fa-pinterest"></i></Link>
            <Link className='foot-link'><i className="fa-brands fa-tiktok"></i></Link>
            <Link className='foot-link'><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
        <div className='lfooter'>
          <div className='row-1'>
            <h6>Data setting</h6>
          </div>
          <div className='row-2'>
            <h6>Donot sell my personal information</h6>
          </div>
          <div className='row-3'>
            <h6>Terms and Condition</h6>
          </div>
          <div className='row-4'>
            <h6>Privacy Policy</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer