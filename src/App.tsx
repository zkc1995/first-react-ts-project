import React, { useState } from 'react';
import { Grid, Layout } from 'antd';
import {
  MenuUnfoldOutlined
} from '@ant-design/icons';

import CustomMenu from './components/Menu'

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const [collapse, setCollapse] = useState(true)
  const hideTrigger = Grid.useBreakpoint().lg
  const trigger = (broken) => {
    setCollapse(broken)
  }
  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        theme="light"
        collapsedWidth={!hideTrigger ? '0' : '79'}
        collapsed={collapse}
        onBreakpoint={trigger}
      >
        <CustomMenu collapse={collapse}/>
        <div>
          {
            hideTrigger && React.createElement(MenuUnfoldOutlined,{
              onClick: () => setCollapse(!collapse || false)
            })
          }
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: "0 24px", background: "white" }}>
          {
            !hideTrigger && React.createElement(MenuUnfoldOutlined,{
              onClick: () => setCollapse(!collapse)
            })
          }
        </Header>
        <Content style={{ margin: "24px" }}>
            content
        </Content>
        <Footer style={{ textAlign: 'center' }}>ts-react ©2021 Created by 呆呆酱</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
