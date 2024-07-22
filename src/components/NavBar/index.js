import React from 'react';
import { useState } from 'react';
import './NavBar.css'
import { Link as LinkR } from 'react-router-dom';
import { FaComputer } from "react-icons/fa6";
import {FaBars} from 'react-icons/fa';
import { MobileMenu, MobileLink } from './design';
import {Bio} from '../../data/constants';

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='Nav'>
      <div className='NavContainer'>
        <LinkR className='NavLogo' to = '/'> 
          <a href = '#about' style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20', cursor: 'pointer' }}> 
            <FaComputer size="3rem" /> 
          </a>
        </LinkR>
        <div className='MobileIcon'> 
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </div>
        <ul className='NavItems'>
          <a href = '#about' className='NavLink'> ABOUT </a>
          <a href = '#skill' className='NavLink'> SKILL </a>
          <a href = '#experience' className='NavLink'> EXPERIENCE </a>
          <a href = '#project' className='NavLink'> PROJECT </a>
          <a href = '#education' className='NavLink'> EDUCATION </a>
        </ul>
        <div className='ButtonContainer'>
          <a className='LinkedInButton' href={Bio.linkedin} target="_blank" rel="noreferrer"  > LinkedInProfile </a>
        </div>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skill' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#project' onClick={() => {
              setIsOpen(!isOpen)
            }}>Project</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <a className='Git' href={Bio.github} target="_blank" rel="noreferrer" > GitHubProfile </a>
          </MobileMenu>
        }
      </div>
    </div>
  )
}

export default NavBar