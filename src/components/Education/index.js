import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {education, experiences} from '../../data/constants'
import EducationCard from '../Cards/EducationCard';
import './Education.css'

const Education = () => {
  return (
    <div className='EF'>
      <div className='EContainer' id = 'education'>
        <div className='EWrapper'>
          <div className='ETitle'> EDUCATION </div>
          <div className='EdDescription'> Below As My Path of Education</div>
          <div className='ETimeLineSection'>
            <Timeline>
              {education.map((education,index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant='filled' color='grey'/>
                    {index !== experiences.length - 2  && <TimelineConnector style={{ background: '#607274' }} />}
                  </TimelineSeparator>
                  <TimelineContent sx = {{py:'12px', px:2}}>
                    <EducationCard education={education} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education