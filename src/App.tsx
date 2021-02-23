import React from 'react';
import { routes, renderRoute } from './router';

import './App.less';

const App: React.FC = () => {
  return (
    <div className="app">
      {renderRoute(routes)}
    </div>
  );
};

export default App;
