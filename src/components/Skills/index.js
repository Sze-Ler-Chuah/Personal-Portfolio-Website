import { skills } from "../../data/constants"
import "./Skills.css"

const Skills = () => {
  return (
    <div className="SkillsSection" id="skill">
      <div className="SkillsContainer">
        <div className="SkillsWrapper">
          <div className="SkillsHeader">
            <h2 className="SkillsTitle">Skills</h2>
            <p className="SkillsDescription">
              A comprehensive blend of technical expertise and professional capabilities
            </p>
          </div>
          <div className="SkillsGrid">
            {skills.map((skill, index) => (
              <div key={skill.id} className="SkillCategory" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="CategoryHeader">
                  <h3 className="CategoryTitle">{skill.title}</h3>
                </div>
                <div className="SkillsList">
                  {skill.skills.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="SkillTag"
                      style={{ animationDelay: `${index * 0.1 + itemIndex * 0.05}s` }}
                    >
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
