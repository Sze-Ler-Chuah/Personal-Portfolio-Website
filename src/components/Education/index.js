import { education } from "../../data/constants"
import EducationCard from "../Cards/EducationCard"
import "./Education.css"

const Education = () => {
  return (
    <div className="EducationSection" id="education">
      <div className="EducationContainer">
        <div className="EducationWrapper">
          <div className="EducationHeader">
            <h2 className="EducationTitle">Education</h2>
            <p className="EducationDescription">My academic journey and educational achievements</p>
          </div>
          <div className="TimelineSection">
            <div className="Timeline">
              {education.map((edu, index) => (
                <div key={index} className="TimelineItem" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="TimelineMarker">
                    <div className="TimelineDot"></div>
                    {index !== education.length - 1 && <div className="TimelineConnector"></div>}
                  </div>
                  <div className="TimelineContent">
                    <EducationCard education={edu} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
