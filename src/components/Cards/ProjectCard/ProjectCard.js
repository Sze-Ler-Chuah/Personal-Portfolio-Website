"use client"

import "./ProjectCard.css"
import { FaImage } from "react-icons/fa"

const ProjectCard = ({ project, setOpenModal }) => {
  const hasImage = !!project?.image

  return (
    <div
      className={`project-card ${!hasImage ? "no-image" : ""}`}
      onClick={() => setOpenModal({ state: true, project })}
    >
      <div className="card-image-container">
        {hasImage ? (
          <>
            <img
              className="card-image"
              src={project.image}
              alt={project?.title || "Project"}
            />
            <div className="image-overlay">
              <div className="view-details-btn">View Details</div>
            </div>
          </>
        ) : (
          <div className="no-image-placeholder">
            <FaImage size={40} />
            <span>No Image Available</span>
          </div>
        )}
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
