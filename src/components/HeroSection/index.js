import React from 'react';
import './HeroSection.css';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import photo from '../../Image/photo.jpg'

const HeroSection = () => {
  return (
    <div className = 'Hero' id = 'about'>
      <div className='HeroContainer'>
        <div className='HeroBg'> </div>
          <div className='HeroInnerContainer'>
            <div className='HeroLeftContainer' id = 'Left'>
              <p className='TextLoop'> I am a 
                <span className='Span'> 
                  <Typewriter options = {{strings : Bio.roles, autoStart : true, loop : true}} /> 
                </span> 
              </p>
              <div className='SubTitle'> 
                <p> Hello There, I am Chuah Sze Ler. <br/> 
                    Currently studying at Monash University Malaysia. <br/>
                    I have a wide interest in Data Analtytics field and <br/> actively seeking 
                    a job related with this field.
                </p> 
              </div>
              <a className='ResumeButton' href = {Bio.resume} target='display'> RESUME </a>

            </div>
            <div className='HeroRightContainer' id = 'Right'> 
              <img className = 'Image' src = {photo} alt = 'self-image' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default HeroSection