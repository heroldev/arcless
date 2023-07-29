/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "../../index.less"
import "../Home/Home.less"
import "./Projects.less"
import getProjects from "./projectsList"

const Projects = () => {

  const baseProjects = useRef(null);

  const [baseProjectsWidth, setBaseProjectsWidth] = useState(0)

  return (
    <>
      <div className="x-container-header">
        <h1 className={"x-title-name"}>Projects</h1>
        <p><Link to="/">back to home</Link></p>
      </div>
      {
        [...getProjects().keys()].map((year, idx) => {
          return (
            <>
              <h1 key={idx} className={"x-subtitle"}>{year}</h1>
              <div className={"x-fl-rr-container-outer"}>
                <hr className="long" />
                {
                  getProjects().get(year)!.map((project, idx) => (
                    <div key={idx} className={"x-fl-rr-container"}>
                      <div className="x-heading-container">
                        <h2 className={"x-subtitle"}>{project.name}</h2>
                        {project.sourceLink && project.visitLink
                          ?
                          <p><a href={project.visitLink}>visit</a> | <a href={project.sourceLink}>source</a></p>
                          : project.visitLink ?
                            <p><a href={project.visitLink}>visit</a></p>
                            : project.sourceLink &&
                            <p><a href={project.sourceLink}>source</a></p>
                        }
                      </div>
                      <ul>
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx}>
                            <p>{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                }

              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Projects
