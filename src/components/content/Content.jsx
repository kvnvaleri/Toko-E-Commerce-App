import React from 'react'
import './content.css'
import imgc from '../../assets/vector/imgc.svg'
import imgcsmall from '../../assets/vector/imgcsmall.svg'


const Content = () => {
  return (
    <div className='td_content'>
      <div className='td_content_section'>
        <h1 className='td_content_section_main-text'>Harga lebih murah hingga 60%+</h1>
        <p className='td_content_section_p'>Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+ dari harga normal. Dengan harga lebih murah tentunya margin kamu bisa lebih besar, dong!</p>
      </div>
      <div className='td_content_section_img'>
          <img src={imgc} alt='Pasti Untung!' />
      </div>
      <div className='td_content_section_img-small'>
          <img src={imgcsmall} alt='Pasti Untung!' />
      </div>
    </div>
  )
}

export default Content