import React from 'react'
import { Menu } from 'antd'

interface IChildProps {
  // 可选
  collapse?: boolean
}

const CustomMenu: React.FC<IChildProps> = (props) => {
  const { collapse } = props
  return (
    <Menu theme="dark" mode="inline" inlineCollapsed={collapse} defaultSelectedKeys={['4']}>
      <Menu.Item key="1">
        nav 1
      </Menu.Item>
      <Menu.Item key="2">
        nav 2
      </Menu.Item>
      <Menu.Item key="3">
        nav 3
      </Menu.Item>
      <Menu.Item key="4">
        nav 4
      </Menu.Item>
    </Menu>
  )
}

export default CustomMenu