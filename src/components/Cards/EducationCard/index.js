import React from 'react'
import styled from 'styled-components'
import './EducationCard.css'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    background-color: rgb(155, 184, 205);
    width: 650px;
    border-radius: 10px;
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

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 2.5px solid #0C356A;

    `

const EducationCard = ({education}) => {
  return (
    <Card>
        <div className='ETop'>
            <img className='EImage' src = {education.img} alt = 'schoolimage'/>
            <div className='EBody'>
                <div className='EName'>{education.school}</div>
                <div className='EDegree'>{education.degree}</div>
                <div className='EDate'>{education.date}</div>
            </div>
        </div>
        <div className='EGrade'> <b>Grade : {education.grade} </b></div>
        <div className='EDescription'>
            <Span>{education.desc}</Span>
        </div>
    </Card>
  )
}

export default EducationCard