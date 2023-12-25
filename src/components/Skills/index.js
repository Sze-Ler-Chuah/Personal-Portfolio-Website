import React from 'react'
import { skills } from '../../data/constants'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='PathColor' id = 'skill'> 
      <div className='Container'>
        <div className='Wrapper'>
          <div className='Title'> TECHNICAL SKILLS </div>
          <div className='Description'> Mixture of Soft Skills and Hard Skills </div>
          <div className='SkillContainer'>
            {skills.map((skill) => (
              <div className='Skill'>
                <h2 key = {skill.id}> {skill.title} </h2>
                <div className='SkillList'> {skill.skills.map((item) => (
                  <div className='SkillItem'>
                    {/* <img className='Image' src = {item.image} /> */}
                    {item.name}
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills