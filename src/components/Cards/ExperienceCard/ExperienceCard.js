import React from 'react'
import styled from 'styled-components'
import './ExperienceCard.css'

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    background : rgb(155, 184, 205);
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 2.5px solid #0C356A;
`
const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <div className="Top">
                <div className='Body'>
                    <div className='Role'>{experience.role}</div>
                    <div className='Date'>{experience.date}</div>
                </div>
            </div>
            <div className='CardDescription'>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <div className='CardSkills'>
                            <div className='SkillDesign' >Skills:</div>
                            <div className='ItemWrapper'>
                                {experience.skills.map((skill, index) => (
                                    <div className='SkillList'> {skill} </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
        </Card>
    )
}

export default ExperienceCard