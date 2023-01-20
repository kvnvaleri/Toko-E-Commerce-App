import React from 'react'
import './navbar.css'
import logo from '../../assets/vector/tokodistributor.svg'

const Navbar = () => {
  return (
    <div className='td_nav'>
      <div className='vector_top'>
      <svg width="326" height="80" viewBox="0 0 326 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.1215 8.45604C105.927 2.56186 117.672 22.058 143.693 52.8891C187.993 105.377 229.167 70.7435 271 40.3197L326 0.319725H216H0C10.4811 6.54874 26.9117 11.0597 51.1215 8.45604Z" fill="white" fill-opacity="0.18"/>
      </svg>
      </div>
      <div className='td_nav_component'>
        <div className='td_nav_section'>
          <div className='td_nav_section_logo'>
            <img src={logo} alt='tokodistributor' />
          </div>
        </div>
        <div className='td_nav_section_button'>
            <button type='button'>Daftar Sekarang</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar