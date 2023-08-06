import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='carousel-container '>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="cool1.jpg" className="d-block" alt=".pic.1."/>
    </div>
    <div className="carousel-item">
      <img src="cool2.png" className="d-block" alt=".pic.2."/>
    </div>
    <div className="carousel-item">
      <img src="cool3.jpg" className="d-block" alt=".pic.3."/>
    </div>
    <div className="carousel-item">
      <img src="cool4.png" className="d-block" alt=".pic.3."/>
    </div>
    <div className="carousel-item">
      <img src="cool5.jpg" className="d-block" alt=".pic.3."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      {/* <card></card> */}

      <div className="cards">
        <div className='card1'>
      <Link to="/Shoes" className="nav-link">
  <img src="card1.jpg" className="card-img-top rounded" alt="jutta"/>
    Running</Link>
        </div>

        <div className='card3'>
      <Link to="/Shoes" className="nav-link">
  <img src="card201.jpg" className="card-img-top rounded" alt="jutta"/>
    Football</Link>
        </div>
      
        <div className='card2'>
      <Link to="/Shoes" className="nav-link">
  <img src="card2.jpg" className="card-img-top rounded"  alt="jutta"/>
    Sneakers</Link>
        </div>
        
       <div className='card4'>
      <Link to="/Shoes" className="nav-link">
  <img src="card4.jpg" className="card-img-top rounded" alt="jutta"/>
    New Arrival</Link>
        </div>
</div>

    {/* <About></About> */}
    <div className='about'>
    <div className='about-container1'>
      <h2>Stories, style, and sporting goods at adidas, since 1949</h2>
      <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during the race, and at the finish line. We’re here to support creators. To improve their game. To live their lives. And to change the world.
      <br/>
      adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
    </div>
    <div className='about-container2'>
      <h2>Workout clothes, for any sport</h2>
      <p>adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. From low to high support. Maximum comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.
      <br/>  
      Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sports apparel too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.</p>
    </div>
    </div>
    <div className='head-footer'>
            <h2>JOIN OUR ADICLUB & GET 15% OFF</h2>
            <button type="button" className="btn btn-dark ms-4">
                <Link className='nav-link' to="/NewAccount">Sign Up For Free</Link>
                </button>
        </div>
</div>
  )
}

export default Home
