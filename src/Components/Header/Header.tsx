import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.jpeg'
const Header = () => {
  return (
    <div className='HeaderBackground'>
      <div className='HeaderContainer'>
        <img src={logo} alt="OQ" style={{height:'40px',paddingTop:'10px'}} />
        <div className='header-text'>
        <h3>OQ HESS SYMPOSIUM 2023</h3>
            
        <h1>Enhancing a Safer and Sustainable Future</h1>
        <p>
        sit amet consectetur adipisicing elit.
         Totam commodi voluptate esse dolorem 
         porro ducimus deserunt provident, saepe maiores voluptatu
         m tenetur magni rem, exercitationem omnis placeat fuga.
          
            </p>
           <br />
           <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Header
