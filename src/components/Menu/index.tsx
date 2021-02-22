import React from 'react';
import { Menu } from 'antd';

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
      <Menu.Item key="/home">
        <Link to="/home">
          首页
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(CustomMenu);