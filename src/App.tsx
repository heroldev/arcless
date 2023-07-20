import './App.less'

function App() {
  return (
    <>
      <div className={"x-container"}>
        <h1 className={"x-title-name"}>Andrew Herold</h1>
        <h2 className={"x-subtitle"}>turning dreams into reality through efficient code and clean design</h2>
      </div>
      <hr />
      <div className="x-container">
        <p>
          bs in computer science @ <a href="https://mnsu.edu">minnesota state university, mankato</a>
        </p>
      </div>
      <div className={"x-container"}>
        <p><a href="https://github.com/heroldev">github</a>{" / "}<a href="https://storage.cloud.google.com/heroldev/resume.pdf">résumé</a></p>
      </div>
      <hr />
      <div className={"x-container"}>
        <p>e-mail: andrew [at] this domain</p>
      </div>
      {/*
<div className={"x-container"}>
        <p className="x-p-small">hello!</p>
      </div>
  */}
      <div className={"x-container"}>
        <p className="x-p-footer">last updated: 07.11.2023</p>
      </div>
    </>
  )
}

export default App
