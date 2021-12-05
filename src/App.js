import React from "react";
import { useState } from "react/cjs/react.development";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display"

const App = (props) => {
  let [about, setAbout] = useState([])
  let [edu, setEdu] = useState([])
  let [exp, setExp] = useState([])


  const saveAbout = (item) => {
    const newEntry = [item];
    setAbout(newEntry)
  }

  const saveEdu = (item) => {
    const newEntry = [...edu, item];
    setEdu(newEntry)
  }

  const saveExp = (item) => {
    const newEntry = [...exp, item];
    setExp(newEntry)
  }

  console.log(about)
  console.log(edu)
  console.log(exp)
  return(
    <div>
       <About saveAbout={saveAbout} />
       <Education saveEdu={saveEdu} />
       <Experience saveExp={saveExp} />
       <Display entries={about}/>
       <Display entries={edu}/>
       <Display entries={exp}/>

    </div>
  )

}

export default App;
