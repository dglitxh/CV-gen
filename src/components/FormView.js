import React, { useState } from "react";
import About from "./About";
import { Education, EditEdu} from "./Education";
import {Experience, EditExp} from "./Experience";
import { EduDisplay, ExpDisplay, AboutDisplay } from "./Display"
import { Steps, Button, message, Modal } from 'antd';
import Preview from "./Preview"
import { useReactToPrint } from 'react-to-print';

const { Step } = Steps;

const FormView = (props) => {
  const [current, setCurrent] = useState(0);
  let [about, setAbout] = useState([])
  let [edu, setEdu] = useState([])
  let [exp, setExp] = useState([])
  let [selected, setSelected] = useState({})
  const {preview, setPreview} = props
  const [isModalVisible, setIsModalVisible] = useState(false);

  const componentRef = React.createRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const saveAbout = (item) => {
    const newEntry = [item];
    setAbout(newEntry)
    message.success('personal Info added!')
  }

  const saveEdu = (item) => {
    if (!edu.find((el) => el.id === item.id)){
      const newEntry = [...edu, item];
      setEdu(newEntry)
    }
    message.success('New educational history added!')
  }

  const saveExp = (item) => {
    if (!exp.find((el) => el.id === item.id)){
      const newEntry = [...exp, item];
      setExp(newEntry)
    }
    message.success('New experience added!')
  }

  const editEduEntry = (item) => {
    let ind = edu.indexOf(selected)
    let edit = edu[ind]
    console.log(edit, 'editentry')
    for (let i of Object.keys(edit)){
      if (i !== 'id') edit[i] = item[i]
    }
    setTimeout(() => {
      if (selected) setEdu(edu.splice(ind, 1, edit))
      console.log('entry has been edited')
    }, 0);
     
  }

  const editExpEntry = (item) => {
    let ind = exp.indexOf(selected)
    let edit = exp[ind]
    console.log(edit, 'editentry')
    for (let i of Object.keys(edit)){
      if (i !== 'id') edit[i] = item[i]
    }
    setTimeout(() => {
      if (selected) setExp(exp.splice(ind, 1, edit))
      console.log('entry has been edited')
    }, 0);
     
  }

  const actions = props.actions

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeStep = (id) => {
    setCurrent(id)
  }

  const deleteExp = (id) => {
    return setExp(exp.filter((el) => el.id !== id))
  }

  const deleteEdu = (id) => {
    return setEdu(edu.filter((el) => el.id !== id))
  }

  const handleEdit = (id) => {
    const edit = edu.find((el) => el.id === id)
    let select = about[0].id === id? about[0] :edit? edit :exp.find((el) => el.id === id)
    setTimeout(() => {
      console.log('ei select')
      setSelected(select)
      console.log(selected, 'selected')
      showModal()
    }, 0)
    
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
 <div ref={componentRef} className="px-5 py-3">
 <Preview
  about={<AboutDisplay actions={actions} entries={about} handleEdit={handleEdit} />}
  experience={<ExpDisplay actions={actions} entries={exp} name={'Experience'} handleEdit={handleEdit} handleDelete={deleteExp}/>}
  education={<EduDisplay actions={actions} entries={edu} name={'Education'} handleEdit={handleEdit} handleDelete={deleteEdu}/>}
  />
</div>

{!actions?<button className="inline-flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium 
rounded-md mx-5 text-white bg-sky-400 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
 onClick={() => handlePrint()}>Print resume</button>: <></>}
</div>

}
<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {
         (function disp() {
          return(
               about.includes(selected)? <About saveAbout={saveAbout} selected={selected}/> :exp.includes(selected)? <EditExp  editExpEntry={editExpEntry} selected={selected}/>
              : <EditEdu  editEduEntry={editEduEntry} selected={selected}/>
              )
          })()

         
      }  
      
</Modal>
</div>
  )
}

export default FormView
