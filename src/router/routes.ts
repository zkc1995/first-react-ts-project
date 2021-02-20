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
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/home',
        component: Home,
        privated: true
      }
    ]
  },
  {
    path: '/sign',
    component: Sign
  } 
];

export default routes;