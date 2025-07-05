"use client"

import { projects } from "../../data/constants"
import { useState } from "react"
import ProjectCard from "../Cards/ProjectCard/ProjectCard"
import "./Project.css"

const Project = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all")

  const categories = [
    { key: "all", label: "All" },
    { key: "web app", label: "Web App" },
    { key: "data", label: "Data Science" },
    { key: "database", label: "Database" },
    { key: "mobile", label: "Mobile App" },
    { key: "algorithm", label: "Algorithm" },
    { key: "oop", label: "Object Oriented Programming" },

  ]

  return (
    <div className="ProjectsSection" id="project">
      <div className="ProjectsContainer">
        <div className="ProjectsWrapper">
          <div className="ProjectsHeader">
            <h2 className="ProjectsTitle">Academic & Personal Projects</h2>
            <p className="ProjectsDescription">A showcase of my technical projects and creative solutions</p>
          </div>

          <div className="FilterContainer">
            <div className="FilterTabs">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`FilterTab ${toggle === category.key ? "active" : ""}`}
                  onClick={() => setToggle(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="ProjectsGrid">
            {toggle === "all" &&
              projects.map((project, index) => (
                <div key={index} className="ProjectCardWrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                </div>
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project, index) => (
                <div key={index} className="ProjectCardWrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
