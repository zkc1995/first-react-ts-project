import React, { useState } from 'react';
import { ForUseState, ForUseEffect, ForUseCallback } from './components';
import { Card } from 'antd';
import './index.less';

const Learnings: React.FC = () => {
  const [current, setCurrent] = useState<string>('ForUseCallback');

  const tabList = [
    { key: 'ForUseState', tab: 'ForUseState' },
    { key: 'ForUseEffect', tab: 'ForUseEffect' },
    { key: 'ForUseCallback', tab: 'ForUseCallback' },
  ];

  const contentList = { 
    ForUseState: <ForUseState />,
    ForUseEffect: <ForUseEffect />,
    ForUseCallback: <ForUseCallback />,
  };

  return (
    <Card
      title="react hook学习汇总"
      tabList={tabList}
      activeTabKey={current}
      onTabChange={key => setCurrent(key)}
    >
      { contentList[current] }
    </Card>
  );
};

export default Learnings;