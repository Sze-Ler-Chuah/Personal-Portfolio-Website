import React from 'react';
import { useState } from 'react';
import './NavBar.css'
import { Link as LinkR } from 'react-router-dom';
import { FaComputer } from "react-icons/fa6";
import {FaBars} from 'react-icons/fa';
import { MobileMenu, MobileLink, MobileNavLogo } from './design';
import {Bio} from '../../data/constants';

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='Nav'>
      <div className='NavContainer'>
        <LinkR className='NavLogo' to = '/'> 
          <a style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20', cursor: 'pointer' }}> 
            <FaComputer size="3rem" /> 
          </a>
        </LinkR>
        <div className='MobileIcon'> 
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </div>
        <ul className='NavItems'>
          <a href = '#about' className='NavLink'> ABOUT ME </a>
          <a href = '#skill' className='NavLink'> SKILLS </a>
          <a href = '#project' className='NavLink'> PROJECTS </a>
          <a href = '#education' className='NavLink'> EDUCATION </a>
        </ul>
        <div className='ButtonContainer'>
          <a className='GitHubButton' href={Bio.github} target="_blank" > GitHubProfile </a>
        </div>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <a href={Bio.github} target="_blank"> GitHubProfile </a>
          </MobileMenu>
        }
      </div>
    </div>
  )
}

export default NavBar



// {
//   isOpen && 
//   <div className='MobileMenu' isopen = "true">
//     <a 
//       href = '#about' 
//       className='MobileLink' 
//       onClick={() => {setIsOpen(!isOpen)}}
//     >
//     ABOUT ME
//     </a>
//     <a 
//       href = '#skill' 
//       className='MobileLink' 
//       onClick={() => {setIsOpen(!isOpen)}}
//     >
//     SKILLS
//     </a>
//     <a 
//       href = '#project' 
//       className='MobileLink' 
//       onClick={() => {setIsOpen(!isOpen)}}
//     >
//     PROJECTS
//     </a>
//     <a 
//       href = '#education' 
//       className='MobileLink' 
//       onClick={() => {setIsOpen(!isOpen)}}
//     >
//     EDUCATION
//     </a>
//   </div>
// }