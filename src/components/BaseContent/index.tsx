import React, { ReactChild, ReactNode } from 'react';
import { Card } from 'antd';

interface BaseContentProps {
  title?: string | ReactChild;
  children: ReactNode;
}

const BaseContent: React.FC<BaseContentProps> = (props) => {
  const { title, children } = props;
  return (
    <Card title={ title ? title : '' }>
      { children }
    </Card>
  );
};

export default BaseContent;