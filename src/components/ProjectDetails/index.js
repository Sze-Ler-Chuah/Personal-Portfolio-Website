"use client"
import { X, Github, ExternalLink, Calendar, Tag } from "lucide-react"
import "./ProjectDetails.css"

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project

  if (!openModal?.state || !project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal({ state: false, project: null })
    }
  }

  const handleClose = () => {
    setOpenModal({ state: false, project: null })
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-wrapper">
          <button className="close-button" onClick={handleClose} aria-label="Close modal">
            <X size={24} />
          </button>

          <div className="modal-content">
            <div className="project-image-container">
              <img
                src={project?.image || "/placeholder.svg?height=300&width=500"}
                alt={project?.title || "Project"}
                className="project-image"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="project-info">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-date">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="project-tags">
                <div className="tags-header">
                  <Tag size={16} />
                  <span>Technologies</span>
                </div>
                <div className="tags-list">
                  {project.tags?.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-description">
                <h3 className="description-title">About This Project</h3>
                <p className="description-text">{project?.description}</p>
              </div>

              <div className="project-actions">
                {project?.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-button primary">
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project?.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button secondary"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
