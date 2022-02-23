import { useState, React } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import { EduDisplay, ExpDisplay, AboutDisplay } from "./Display"
import { Steps, Button, message } from 'antd';
import Preview from "./Preview"

const { Step } = Steps;

const FormView = (props) => {
  const [current, setCurrent] = useState(0);
  let [about, setAbout] = useState([])
  let [edu, setEdu] = useState([])
  let [exp, setExp] = useState([])
  const {preview, setPreview} = props


  const saveAbout = (item) => {
    const newEntry = [item];
    setAbout(newEntry)
    message.success('personal Info added!')
  }

  const saveEdu = (item) => {
    const newEntry = [...edu, item];
    setEdu(newEntry)
    message.success('New educational history added!')
  }

  const saveExp = (item) => {
    const newEntry = [...exp, item];
    setExp(newEntry)
    message.success('New experience added!')
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeStep = (id) => {
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
    {!preview? <div className=" w-full  px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
 <Steps current={current} onChange={onChangeStep}>
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
    <Button type="primary" onClick={() =>{
        return(
           message.success('Processing complete!'),
           setPreview(true)
         )}}>
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
 :
 <div id="cv" className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
 <Preview
  about = <AboutDisplay entries={about} />
  experience = <ExpDisplay entries={exp} name={'Experience'}/>
  education=<EduDisplay entries={edu} name={'Education'}/>
 />

</div>}
</div>
  )
}

export default FormView
