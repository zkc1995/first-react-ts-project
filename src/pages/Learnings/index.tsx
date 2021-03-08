import React from 'react';
import { ForUseState, ForUseEffect, ForUseCallback } from './components';
import './index.less';

const Learnings: React.FC = () => {
  return (
    <div>
      <h1>react hook学习汇总</h1>
      <ForUseState />
      <ForUseEffect />
      <ForUseCallback />
    </div>
  );
};

export default Learnings;