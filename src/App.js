import React from "react";
import { useState } from "react/cjs/react.development";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { EduDisplay, ExpDisplay, AboutDisplay } from "./components/Display"
import { Steps, Button, message } from 'antd';
import { Layout, Menu } from 'antd';
import Preview from "./components/Preview"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;


const { Step } = Steps;


const App = (props) => {
  const [preview, setPreview] = useState(false)
  let [about, setAbout] = useState([])
  let [edu, setEdu] = useState([])
  let [exp, setExp] = useState([])
  const [current, setCurrent] = React.useState(0);
  let [collapsed, setCollapsed] = useState(false)


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

  const toggle = () => {
    setCollapsed(!collapsed)
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <h3 className="text-white text-center mt-3 text-xl">Resume Builder</h3>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setPreview(false)}>
              Form
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setPreview(true)}>
              View Mode
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />} onClick={() => setPreview(true)}>
              Preview
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ 'padding-left': '2%'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <h2 className="text-center text-purple-500"> Fill Form To Build Resume</h2>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
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
       :
       <div id="cv" className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 pb-6">
       <Preview
        about = <AboutDisplay entries={about} />
        experience = <ExpDisplay entries={exp} name={'Experience'}/>
        education=<EduDisplay entries={edu} name={'Education'}/>
       />

    </div>}
          </Content>
        </Layout>
      </Layout>


    </div>
  )

}

export default App;
