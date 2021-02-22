import Layout from '../Layout';
import Home from '../pages/Home';
import Sign from '../pages/Sign';

// 给路由定义类型接口
export interface RouteOption {
  path: string,
  redirect?: string,
  component?: any,
  privated?: boolean,
  exact?: boolean,
  routes?: RouteOption[]
}

const routes: RouteOption[] = [
  {
    path: '/sign',
    component: Sign
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        redirect: '/home',
        exact: true
      },
      {
        path: '/home',
        component: Home,
        privated: true
      }
    ]
  }
];

export default routes;