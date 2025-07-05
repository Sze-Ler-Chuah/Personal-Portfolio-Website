import { experiences } from "../../data/constants"
import ExperienceCard from "../Cards/ExperienceCard/ExperienceCard"
import "./Experience.css"

const Experience = () => {
  return (
    <div className="ExperienceSection" id="experience">
      <div className="ExperienceContainer">
        <div className="ExperienceWrapper">
          <div className="ExperienceHeader">
            <h2 className="ExperienceTitle">Experience</h2>
            <p className="ExperienceDescription">
              My journey as a Computer Science student and professional development
            </p>
          </div>
          <div className="TimelineSection">
            <div className="Timeline">
              {experiences.map((experience, index) => (
                <div key={index} className="TimelineItem" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="TimelineMarker">
                    <div className="TimelineDot"></div>
                    {index !== experiences.length - 1 && <div className="TimelineConnector"></div>}
                  </div>
                  <div className="TimelineContent">
                    <ExperienceCard experience={experience} />
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

export default Experience
