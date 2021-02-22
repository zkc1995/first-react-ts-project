import React, { useState } from 'react';
import { Grid, Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import CustomMenu from '../components/Menu';
import { renderRoute } from '../router';
import '../App.css';

import type { RouteOption } from '../router';

interface LayoutProps {
  routes: RouteOption[]
}

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC<LayoutProps> = (props) => {
  const { routes } = props;

  const [collapse, setCollapse] = useState(true);
  const hideTrigger = Grid.useBreakpoint().lg;

  const trigger = (broken: boolean) => {
    console.log(broken);
    setCollapse(broken);
  };

  console.log('test');
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        theme="light"
        collapsedWidth={!hideTrigger ? '0' : '79'}
        collapsed={collapse}
        onBreakpoint={trigger}
      >
        <div className="logo"></div>
        <CustomMenu collapse={collapse} />
        <div>
          {hideTrigger &&
            React.createElement(MenuUnfoldOutlined, {
              onClick: () => setCollapse(!collapse || false),
            })}
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: '0 24px', background: 'white' }}>
          {!hideTrigger &&
            React.createElement(MenuUnfoldOutlined, {
              onClick: () => setCollapse(!collapse),
            })}
        </Header>
        <Content style={{ margin: '24px' }}>
          { renderRoute(routes) }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ts-react ©2021 Created by 呆呆酱
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
