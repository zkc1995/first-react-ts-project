import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AccountBookOutlined, DesktopOutlined } from '@ant-design/icons';


import { Link, withRouter } from 'react-router-dom';

interface IChildProps {
  // 可选
  collapse?: boolean;
  location: { [propName: string]: any }
}

const CustomMenu: React.FC<IChildProps> = (props) => {
  const { location } = props;
  return (
    <Menu mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={[location.pathname]}>
      <Menu.Item key="/home" icon={<HomeOutlined />}>
        <Link to="/home">
          系统首页
        </Link>
      </Menu.Item>
      <Menu.Item key="/work" icon={<DesktopOutlined />}>
        <Link to="/work">
          工作管理
        </Link>
      </Menu.Item>
      <Menu.Item key="/property" icon={<AccountBookOutlined />}>
        <Link to="/property">
          财产管理
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(CustomMenu);