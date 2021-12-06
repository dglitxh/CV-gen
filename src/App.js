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

  return(
    <div>
    <div className=" w-full bg-gray-800  px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
       <About saveAbout={saveAbout} />
       <Education saveEdu={saveEdu} />
       <Experience saveExp={saveExp} />
       </div>
       <div id="cv" className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
       <Display entries={about} name={'Personal'}/>
       <Display entries={edu} name={'Education'}/>
       <Display entries={exp} name={'Experience'}/>

    </div>
    </div>
  )

}

export default App;
