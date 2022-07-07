import React from "react";
import {useState} from 'react'
import { Layout, Menu, notification } from 'antd';
import FormView from './components/FormView'
import './index.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const App = (props) => {
  const [preview, setPreview] = useState(false)
  let [collapsed, setCollapsed] = useState(false)
  const [actions, setActions] = useState(true)
  const [showNotif, setShowNotif] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

if(showNotif){
  (function (){
    notification.info({
     message: 'Hello there!',
     key: '77xd',
     duration: 8,
     description:
       'For an optimal experience use phone in Landscape Mode or use a PC',
   });
   setShowNotif(false)
 })()
}

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
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => {
              return(
                setPreview(true),
                setActions(true)
                )
              }}>
              View & Edit
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => {
              return(
                setPreview(true),
                setActions(false)
                )
              }}>
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
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 380,
            }}
          >
          <FormView preview={preview} setPreview={setPreview} actions={actions} setActions={setActions}/>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App;
