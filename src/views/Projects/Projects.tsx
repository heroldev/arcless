/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import { Link } from "react-router-dom"
import "../../index.less"
import "../Home/Home.less"
import "./Projects.less"
import getProjects from "./projectsList"

const Projects = () => {

  return (
    <div style={{height: "100%", marginRight: "2.4em", marginLeft: "2.4em"}}>
      <div className="x-container-header">
        <h1 className={"x-title-name"}>Projects</h1>
        <p><Link to="/">back to home</Link></p>
        <p className="x-p-footer" style={{paddingTop: "0.6em"}}>last updated: 7.30.2023</p>
      </div>
      {
        [...getProjects().keys()].map((year, idx) => {
          return (
            <>
              <h1 key={idx} className={"x-subtitle"}>{year}</h1>
              <div className={"x-fl-rr-container-outer"}>
                <hr className="long" />
                {
                  (getProjects().get(year) ?? []).map((project, idx) => (
                    <div key={idx} className={"x-fl-rr-container"}>
                      <div className="x-heading-container">
                        <h2 className={"x-subtitle"}>{project.name}</h2>
                        {project.sourceLink && project.visitLink
                          ?
                          <p><a target="_blank" href={project.visitLink}>visit</a> | <a target="_blank" href={project.sourceLink}>source</a></p>
                          : project.visitLink ?
                            <p><a target="_blank" href={project.visitLink}>visit</a></p>
                            : project.sourceLink &&
                            <p><a target="_blank" href={project.sourceLink}>source</a></p>
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
    </div>
  )
}

export default Projects
