/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import "../Home/Home.less"
import "./Projects.less"
import getProjects from "./projectsList"

const Projects = () => {

  return (
    <>
      {
        getProjects().forEach((projectList, year) => {
          console.log(projectList)
          return (
            <>
              <h1 className={"x-title-name"}>{year}</h1>
              <div className={"x-fl-rr-container"}>
                {
                  projectList.map((project, idx) => (
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
