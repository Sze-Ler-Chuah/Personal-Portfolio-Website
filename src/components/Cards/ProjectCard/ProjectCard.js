"use client"

import "./ProjectCard.css"

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div className="project-card" onClick={() => setOpenModal({ state: true, project: project })}>
      <div className="card-image-container">
        <img
          className="card-image"
          src={project?.image || "/placeholder.svg?height=200&width=300"}
          alt={project?.title || "Project"}
        />
        <div className="image-overlay">
          <div className="view-details-btn">View Details</div>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <span className="card-date">{project.date}</span>
        </div>

        <p className="card-description">{project.description}</p>

        <div className="card-tags">
          {project.tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
