import React from 'react'
import {projects} from '../../data/constants'
import { useState } from 'react';
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import styled from 'styled-components';
import "./Project.css"

export const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    &:hover {
        background: rgb(48, 77, 48, 0.5);
    }
    @media (max-width: 768px) {
        padding: 8px 20px;
        border-radius: 4px;
    }
`

const Project = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <div className='PF' id = 'project'>
      <div className='PContainer' >
          <div className='PWrapper'>
            <div className='Title'> PROJECTS </div>
            <div className='Description'> Here are Some of My Projects</div>
            <div className='ToggleButtonGroup'>
              { toggle === 'all' ? 
                <ToggleButton active value="all" onClick={() => setToggle('all')}> All </ToggleButton> :
                <ToggleButton value="all" onClick={() => setToggle('all')}> All </ToggleButton>
              } 
              <div className='Divider' />
              { toggle === 'Data Analyst' ? 
                <ToggleButton active value="data" onClick={() => setToggle('data')}> DATA ANALYTIC </ToggleButton> :
                <ToggleButton value="data" onClick={() => setToggle('data')}> DATA ANALYTIC </ToggleButton>
              }
              <div className='Divider' />
              { toggle === 'web app' ? 
                <ToggleButton active value="web app" onClick={() => setToggle('web app')}> WEB APP </ToggleButton> :
                <ToggleButton value="web app" onClick={() => setToggle('web app')}> WEB APP </ToggleButton>
              } 
            </div>
            <div className='CardContainer'>
              {toggle === 'all' && projects.map((project) => (
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
              {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Project
