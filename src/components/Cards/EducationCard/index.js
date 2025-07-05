import "./EducationCard.css"

const EducationCard = ({ education }) => {
  return (
    <div className="education-card">
      <div className="card-header">
        <div className="school-info">
          <div className="school-container">
            <img
              className="school-image"
              src={education.img || "/placeholder.svg?height=60&width=60"}
              alt={education.school}
            />
            <div className="school-details">
              <h3 className="school-name">{education.school}</h3>
              <p className="degree">{education.degree}</p>
            </div>
          </div>
        </div>
        <div className="date-range">{education.date}</div>
      </div>

      <div className="academic-info">
        {education.grade && (
          <div className="grade-badge">
            <span className="grade-label">Grade:</span>
            <span className="grade-value">{education.grade}</span>
          </div>
        )}
        {education.wam && (
          <div className="wam-badge">
            <span className="wam-label">WAM:</span>
            <span className="wam-value">{education.wam}</span>
          </div>
        )}
      </div>

      {education.desc && (
        <div className="description">
          <span className="description-text">{education.desc}</span>
        </div>
      )}
    </div>
  )
}

export default EducationCard
