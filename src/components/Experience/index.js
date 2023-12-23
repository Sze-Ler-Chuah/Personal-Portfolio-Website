import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard/ExperienceCard';
import './Experience.css'

const Experience = () => {
  return (
    <div className='Ex'>
        <div className='ExContainer' id = 'Experience'>
            <div className='ExWrapper'>
                <div className='Title'> EXPERIENCE </div>
                <div className='Description'> Experience As A Computer Science Student</div>
                <div className='TimeLineSection'>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="filled" color="grey" />
                                    {index !== experience.length - 1 && <TimelineConnector style={{ background: '#607274' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ) )}
                    </Timeline>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience