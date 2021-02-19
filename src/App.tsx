import React, { useState } from 'react';
import { Grid, Layout } from 'antd';
import {
  MenuUnfoldOutlined
} from '@ant-design/icons';

import CustomMenu from './components/Menu'

const { useBreakpoint } = Grid;

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const screens = useBreakpoint();
  const showTrigger = screens.lg
  const [collapse, setCollapse] = useState(showTrigger)
  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsedWidth="0"
        collapsed={collapse}
        onBreakpoint={() => setCollapse(!collapse)}
      >
        <CustomMenu collapse={collapse}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          {
            showTrigger && React.createElement(MenuUnfoldOutlined,{
              onClick: () => setCollapse(!collapse)
            })
          }
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ts-react ©2021 Created by 呆呆酱</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
