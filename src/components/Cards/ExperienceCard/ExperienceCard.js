import styled from "styled-components"
import "./ExperienceCard.css"

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.6;
    color: #555;
    transition: all 0.3s ease;
    font-size: 0.95rem;
`

const Card = styled.div`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    width: 100%;
    max-width: 1000px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.08);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(135deg, #000 0%, #333 100%);
        transition: all 0.4s ease;
        border-radius: 0 3px 3px 0;
    }

    &::after {
        content: "";
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
        opacity: 0;
        transition: all 0.4s ease;
        pointer-events: none;
    }

    &:hover {
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        transform: translateY(-8px) scale(1.02);
        border-color: rgba(0, 0, 0, 0.15);
    }

    &:hover::before {
        width: 8px;
        background: linear-gradient(135deg, #000 0%, #000 100%);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    &:hover::after {
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        padding: 1.5rem;
        gap: 1.2rem;
        max-width: 100%;
        border-radius: 16px;
    }

    @media only screen and (max-width: 480px) {
        padding: 1.2rem;
        gap: 1rem;
        border-radius: 12px;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
        color: #333;
    }
`

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="experience-card">
      <div className="Top">
        <div className="Body">
          <div className="Role">{experience.role}</div>
          {experience.company && <div className="Company">{experience.company}</div>}
        </div>
        <div className="Date">{experience.date}</div>
      </div>
      <div className="CardDescription">
        {experience?.desc && <Span className="description-text">{experience?.desc}</Span>}
      </div>
      {experience?.skills && experience.skills.length > 0 && (
        <div className="CardSkills">
          <div className="ItemWrapper">
            {experience.skills.map((skill, index) => (
              <div key={index} className="SkillList">
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

export default ExperienceCard
