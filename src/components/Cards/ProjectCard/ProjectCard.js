import React from 'react';
import styled from 'styled-components';
import './ProjectCard.css'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: rgb(255, 247, 212);
    cursor: pointer;
    border-radius: 10px;
    border : 3px solid rgb(238, 114, 20);
    box-shadow: 0 0 12px 4px rgba(238, 114, 20,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(238, 114, 20,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const ProjectCard = ({project, setOpenModal}) => {
  return (
    <Card onClick={() => setOpenModal({state: true, project: project})}>
        <img className='PCImage' src = {project?.image} alt = 'Img'/>
        <div className='Tags'>
            {project.tags?.map((tag,index) => (
                <span className='Tag'> {tag} </span>
            ))}
        </div>
        <div className='Details'>
            <div className='PCTitle'> {project.title} </div>
            <div className='PCDate'> {project.date} </div>
            <div className='PCDescription'> {project.description} </div>
        </div>
    </Card>
  )
}

export default ProjectCard