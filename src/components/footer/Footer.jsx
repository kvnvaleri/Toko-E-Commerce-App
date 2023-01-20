import React from 'react'
import './footer.css'
import logob from '../../assets/vector/tokodistributorbig.svg'
import logos from '../../assets/vector/ftokodistributorsmall.svg'
import playstore from '../../assets/vector/googleplay.svg'
import instagram from '../../assets/vector/instagram.svg'
import youtube from '../../assets/vector/youtube.svg'
import linkedin from '../../assets/vector/linkedin.svg'
import facebook from '../../assets/vector/facebook.svg'
import wa from '../../assets/vector/wa.svg'
import wa24 from '../../assets/vector/wa24.svg'

const Footer = () => {
  return (
    <div className='td_footer'>
      <div className='td_footer_section'>
        <img className='td_footer_section_main-logo' src={logob} alt='tokodistributor' />
        <img className='td_footer_section_main-logo-small' src={logos} alt='tokodistributor' />
        <p className='td_footer_section_p'>Unduh Aplikasi Tokodistributor</p>
        <div className='td_footer_section_content-text'>
          <a href='https://play.google.com/store/apps/details?id=com.tokodistributor&hl=id&gl=US'>
            <img src={playstore} alt="Playstore" />
          </a>
        </div>
        <div className='td_footer_section_content-sc'>
          <a href='https://www.instagram.com/tokodistributor/?hl=id'>
            <img src={instagram} alt="Instagram" />
          </a>
          <a href='https://www.youtube.com/Tokodistributor'>
            <img src={youtube} alt="Youtube" />
          </a>
          <a href='https://www.linkedin.com/company/tokodistributorindonesia/'>
            <img src={linkedin} alt="LinkedIN" />
          </a>
          <a href='https://www.facebook.com/tokodistributorofficial/'>
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className='td_footer_section_img'>
          <img src={wa} alt='Pasti Untung!' />
      </div>
      <div className='td_footer_section_img-small'>
          <img src={wa24} alt='Pasti Untung!' />
      </div>
    </div>
  )
}

export default Footer