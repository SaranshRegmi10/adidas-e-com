import React from 'react'

function Newaccount() {
  return (
    <div>
      <div className='creation'>
        <img src='adidas.png' alt='adidas'></img>
        <h1>JOIN OUR CLUB</h1>
        <div className='Naam'>
          <div className="mb-3">
            <label htmlfor="formGroupExampleInput" className="form-label"><h3>YOUR NAME</h3></label>
            <input type="text" className="form-control mb-3" id="formGroupExampleInput" placeholder="First Name" required />
            <input type="text" className="form-control mb-3" id="formGroupExampleInput2" placeholder="Last Name" required/>
          </div>
        </div>

        <div className='radio mb-3'>
          <h3>Gender</h3>
          <div className='form-check'>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlhtmlfor="flexRadioDefault2">
              Male
            </label>
          </div>
          <div className='form-check'>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlhtmlfor="flexRadioDefault2">
              Female
            </label>
          </div>
          <div className='form-check'>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlhtmlfor="flexRadioDefault2">
              Others
            </label>
          </div>
        </div>

        <div className='mailing mb-3'>
          <div className="mb-3">
            <label htmlfor="exampleFormControlInput1" className="form-label"><h3>Login-details</h3></label>
            <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="E-mail" aria-describedby="emailHelp" required/>
            <input type="password" className="form-control mb-3" id="inputPassword" placeholder='password' aria-describedby="passwordHelpInline" required/>
          </div>
       </div>

        <div className='Terms mb-3'>
          <h3>Terms and Conditions</h3>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  required/>
            <label className="form-check-label" htmlfor="flexCheckDefault">
              I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  required/>
            <label className="form-check-label" htmlfor="flexCheckChecked">
              I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
            <label className="form-check-label" htmlfor="flexCheckDefault">
              Yes, I am over 18 years old.
            </label>
          </div>
        </div>

        <div className='button'>
        <button type="submit" className="btn btn-secondary" href="/">Register <i className="fa-solid fa-arrow-right"></i></button>
        </div>

      </div>
    </div>
  )
}

export default Newaccount
