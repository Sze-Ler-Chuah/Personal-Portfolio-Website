import React from 'react';
import { Bio } from '../../data/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () => {
  return (
    <div className='FContainer'>
        <div className='FWrapper'>
            <h1 className='FLogo'>SZE LER</h1>
            <nav className='FNavigate'>
                <a href = '#about' className='FNavLink'>About</a>
                <a href = '#skill' className='FNavLink'>Skill</a>
                <a href = '#experience' className='FNavLink'>Experience</a>
                <a href = '#project' className='FNavLink'>Project</a>
                <a href = '#education' className='FNavLink'>Education</a>
            </nav>
            <div className='FSocialMediaIcons'>
            <a href = {Bio.linkedin} className='FSocialMediaIcon' target='display'> <LinkedInIcon /> </a>
            <a href = {Bio.facebook} className='FSocialMediaIcon' target='display'> <FacebookIcon /> </a>
            <a href = {Bio.instagram} className='FSocialMediaIcon' target='display'> <InstagramIcon /> </a>
            </div>
            <p className='FCopyRight'> &copy; 2024 Chuah Sze Ler. All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer;