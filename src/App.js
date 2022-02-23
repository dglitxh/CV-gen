import React from "react";
import { useState } from "react/cjs/react.development";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display"
import { Steps, Button, message } from 'antd';

const { Step } = Steps;


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

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (id) => {
    setCurrent(id)
  }

  const steps = [
    {
      title: 'Personal Info',
      id: 1,
      content: () => {return <About saveAbout={saveAbout} />},
    },
    {
      title: 'Education',
      id: 2,
      content: () => {return <Education saveEdu={saveEdu} />},
    },
    {
      title: 'Experience',
      id: 3,
      content: () => {return <Experience saveExp={saveExp} />},
    },
  ];
  
  return(
    <div>
    <div className=" w-full  px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
       <Steps current={current} onChange={onChange}>
        {steps.map(item => (
          <Step key={item.id} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content()}</div>
      <div className="steps-action step-buttons">
        {current < steps.length - 1 && (
          <Button className="" type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
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
