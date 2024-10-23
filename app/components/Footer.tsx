import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center p-10 bg-gradient-to-r from-yellow-500 to-red-500'>
        <nav className='flex justify-center flex-wrap gap-6 text-white font-medium'>
          <a className='hover:text-yellow-300' href='#'>Home</a>
          <a className='hover:text-yellow-300' href='#'>Menu</a>
          <a className='hover:text-yellow-300' href='#'>About Us</a>
          <a className='hover:text-yellow-300' href='#'>Contact</a>
          <a className='hover:text-yellow-300' href='#'>Order Now</a>
        </nav>


        <div className='flex justify-center space-x-5 transition-transform hover:scale-105'>

        <a href='http//facebook.com'target='blank'rel='nofollow' >
        <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
        </a>

        <a href='http//linkedin.com'target='blank'rel='nofollow' >
        <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
        </a>

        <a href='http//twitter.com'target='blank'rel='nofollow' >
        <img width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
        </a>

        <a href='http//instagram.com'target='blank'rel='nofollow' >
        <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
        </a>
         </div> 
        <div>
          <p className='text-center text-white font-medium'>
            &copy; 2024 Hira Naz, All rights reserved.  Redoven Delicious Pizzas delivered hot and fresh!
          </p>
        </div>
       
      </footer>
    
    </div>
  )
}

export default Footer
