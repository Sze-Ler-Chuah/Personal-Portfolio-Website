import React from 'react';
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import "./ProjectDetails.css";
import styled from 'styled-components';

const PDButton = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color:rgb(255,255,255);
    padding: 12px 16px;
    border-radius: 8px;
    border : 2px solid rgb(0,0,0);
    background-color: rgb(15, 33, 103);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: rgb(0, 0, 0);
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const SButton = styled(CloseRounded)`
    color : rgb(0,0,0);
    &:hover{
        background: rgb(0, 77, 132);
        color : rgb(255,255,255);
    }`

const ProjectDetails = ({openModal,setOpenModal}) => {
    const project = openModal?.project;
    return (
        <Modal open = {true} onClose={() => setOpenModal({state : false, project : null})}>
            <div className='PDContainer'>
                <div className='PDWrapper'>
                    <SButton
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "20px",
                            cursor: "pointer",
                            width: '30px',
                            height : '30px',
                            borderRadius: 25
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}/>
                    <img src = {project?.image} alt = 'project_image'/>
                    <div className='PDTitle'>{project.title}</div>
                    <div className='PDDate'>{project.date}</div>
                    <div className='PDTags'>
                        {project.tags.map((tag) => (
                            <div className='PDTag'> {tag} </div>
                        ))}
                    </div>
                    <div className='PDDescription'>{project?.description}</div>
                    <div className='PDButtonGroup'>
                        <PDButton dull href={project?.github} target='new'>View Code</PDButton>
                        <PDButton href={project?.webapp} target='new'>View Live App</PDButton>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ProjectDetails