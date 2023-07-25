import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import "../Home/Home.less"
import "./Projects.less"
import remarkGfm from "remark-gfm"

const Projects = () => {

  return (
    <>
      <h1 className={"x-title-name"}>2023</h1>
      <div className={"x-fl-rr-container"}>
        <div className={"x-fl-rr-container"}>
          <div className="x-heading-container">
            <h2 className={"x-subtitle"}>Personal Website</h2>
            <p><a href="https://github.com/heroldev/arcless">source</a></p>
          </div>
          <ul>
            <li>
              <p>Created a simple personal portfolio to showcase my projects and experience.</p>
            </li>
          </ul>
        </div>
        <div className={"x-fl-rr-container"}>
          <div className="x-heading-container">
            <h2 className={"x-subtitle"}>Falcon</h2>
          </div>
          <ul>
            <li>
              <p>Architected a cross-platform tracker music player using <strong>Golang</strong> and the BASS audio library.</p>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Projects
