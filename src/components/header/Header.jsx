import React from 'react'
import './header.css'
import img from '../../assets/vector/imgcontent.svg'
import imgsmall from '../../assets/vector/imgcontent-small.svg'

const Header = () => {
  return (
    <div className='td_head'>
      <div className='td_head_component'>
      <div className='td_head_section'>
        <h1 className='td_head_section_main-text'>Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan</h1>
        <p className='td_head_section_p'>Dapatkan harga khusus premium  yang lebih murah hingga 60%+  dengan menjadi Reseller Premium</p>
        <div className='td_head_section_content-text'>
          <button type='button'>Daftar Sekarang &nbsp; &#62;</button>
        </div>
      </div>
      <div className='td_head_section_img'>
          <img src={img} alt='Pasti Untung!' />
      </div>
      <div className='td_head_section_img-small'>
          <img src={imgsmall} alt='Pasti Untung!' />
      </div>
      </div>
      <div className='vector_bottom'>
        <svg width="222" height="57" viewBox="0 1 262 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M181.529 32.2605C138.141 35.6939 128.843 34.3373 108.243 16.3779C82.6218 -5.95883 39.3348 -4.95401 15 16.3779C3.85842 26.1446 0 57 0 57H51H222C213.702 53.3715 200.695 30.7439 181.529 32.2605Z" fill="white" fill-opacity="0.18"/>
        </svg>
      </div>
    </div>
  )
}

export default Header