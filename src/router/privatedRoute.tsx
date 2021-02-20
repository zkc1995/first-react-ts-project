import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { RouteOption } from './routes';

const PrivatedRoute: React.FC<RouteOption> = (props) => {

  const { path, component: Component, routes } = props;
  const TOKEN = '';

  // 没有登陆则跳转至登陆页
  if(!TOKEN) {
    return <Redirect path={path} to='/sign' />;
  }
  
  return (
    <Route path={path} render={(prop) => <Component {...prop} routes={routes} />}/>
  );
};

export default PrivatedRoute;