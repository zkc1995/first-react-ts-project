import React from 'react';
import { routes, renderRoute } from './router';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {renderRoute(routes)}
    </div>
  );
};

export default App;
