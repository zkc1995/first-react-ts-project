import React, { useState } from 'react';
import { ForUseState, ForUseEffect, ForUseCallback, ForUseMemo } from './components';
import { Card } from 'antd';
import './index.less';

const Learnings: React.FC = () => {
  const [current, setCurrent] = useState<string>('ForUseMemo');

  const contentList = { 
    ForUseState: <ForUseState />,
    ForUseEffect: <ForUseEffect />,
    ForUseCallback: <ForUseCallback />,
    ForUseMemo: <ForUseMemo />,
  };

  const tabList = Object.keys(contentList).map(v => {
    return { key: v, tab: v };
  });

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