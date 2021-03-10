/**
 * useMemo
 * 用法：const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 * return a memoized value返回一个缓存值
 * 
 * 验证方法：
 * 1. 设一个被缓存的随机值，一个未被缓存的随机值
 * 2. 通过修改state来进行re-render
 * 3. 查看二者的区别
 * 
 * 结论：未被缓存的值会重新生产随机值，被缓存的则不变
 */

import React, { useMemo, useState } from 'react';

const ForUseMemo: React.FC = () => {
  
  const [state, setstate] = useState<number>(0);
  const [state2, setstate2] = useState<number>(0);
    
  const memoizedValue = useMemo(() => Math.random(), []);
  const computedMemoizedValue = useMemo(() => Math.random(), [state2]);
  const unMemoizedValue = Math.random();

  return (
    <>
      <p>memoizedValue: {memoizedValue}</p>
      <p>unMemoizedValue: {unMemoizedValue}</p>
      <p>computedMemoizedValue: {computedMemoizedValue}</p>
      <p>state: {state}</p>
      <p>state2: {state2}</p>
      <button onClick={() => setstate((pre) => pre + 1)}>Re-render</button>
      <button onClick={() => setstate2((pre) => pre + 2)}>change computedMemo</button>
    </>
  );
};

export default ForUseMemo;