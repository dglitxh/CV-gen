import React from "react";
import {useState} from 'react'
import { Layout, Menu } from 'antd';
import FormView from './components/FormView'

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

  const toggle = () => {
    setCollapsed(!collapsed)
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
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setPreview(true)}>
              View & Edit
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => setPreview(true)}>
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
          <FormView preview={preview} setPreview={setPreview}/>
          </Content>
        </Layout>
      </Layout>


    </div>
  )

}

export default App;
