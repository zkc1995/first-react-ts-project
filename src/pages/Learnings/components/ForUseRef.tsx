/**
 * useRef
 * 用法：const refContainer = useRef(initialValue);
 *      给对应元素加上ref={refContainer}
 * 
 * ref对象的.current 属性被初始化为传入的参数（initialValue）
 * 
 * 与useState的区别：useRef的值改变不会引起组件重新渲染，也不会通知你内容以及发生了变化
 */

import React, { useRef, useState } from 'react';
import { Button } from 'antd';

const ForUseRef: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const valueRef = useRef<any>(null);

  const handleClick = () => {
    setValue(valueRef?.current?.value);
  };

  return (
    <div className="App">
      <h4>Value in Ref: {valueRef?.current?.value}</h4>
      <h4>Value: {value}</h4>
      <input ref={valueRef} type="text"/>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
};

export default ForUseRef;