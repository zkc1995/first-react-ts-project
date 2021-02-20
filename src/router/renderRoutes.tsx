import React from 'react';
// 相当与vue中的router-view
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './privatedRoute';

import type { RouteOption } from './routes';

// <放参数的类型>
const renderRoutes:React.FC<RouteOption[]> = (routes) => {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          const { path, redirect, privated, exact, component: Component, routes } = route;
          
          // 如果需要登陆校验
          if(privated) {
            return <PrivateRoute key={i} {...route} />; 
          }

          // 如果是重定向
          if(redirect) {
            return <Redirect key={i} exact={exact} path={path} to={redirect}/>;
          }

          // 正常跳转
          return Component ? (
            <Route
              path={path}
              key={i}
              render={(props:RouteOption) => <Component {...props} routes={routes} />}/>
          ) : null;
        })
      }
    </Switch>
  );
};

export default renderRoutes;