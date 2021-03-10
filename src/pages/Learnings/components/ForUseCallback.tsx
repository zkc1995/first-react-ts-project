/**
 * useCallback
 * 
 * 用法： useCallback(()=>{},[])
 * 
 * 验证思路
 * 1. 保存一个随机值
 * 2. 通过更新状态，来确认当前memoizedCallback，unMemoizedCallback是否等于之前声明的函数
 * 3. 如果是true，证明它被缓存了，还是使用的原来的函数而不是创建一个新的函数
 * 4. 而第一个显示的随机数则是用来证明当状态改变时，界面上会现实一个重新生成的随机数
 * 5. memoizedValue只是一个用来做对比的初始化随机值
 * 大致理解如下：
 * const memoizedCallback = () => {}; => memoizedCallback === memoizedCallback // true, useCallback取的就是原来函数
 * const unMemoizedCallback = () => {}; => memoizedCallback === unMemoizedCallback // false，没有缓存时，相当于新建一个函数，此时则与先前不相等
 *  
 * 验证结果
 * 使用了useCallback的函数memoizedCallback在组件重新渲染时不会创建一个新的函数，即缓存了之前的那个函数
 */
const memoizedValue = Math.random();

import React, { useCallback, useState } from 'react';

const ForUseCallback: React.FC = () => {
  const [state, changeState] = useState<Record<string, unknown>>({});
  
  const memoizedCallback = useCallback(() => console.log(memoizedValue), []);
  const unMemoizedCallback = () => console.log(memoizedValue);
  const {prevMemoizedCallback, prevUnMemoizedCallback} = state;
  return (
    <>
      <p>Memoized value: {memoizedValue}</p>
      <p>New update {Math.random()}</p>
      <p>is prevMemoizedCallback === to memoizedCallback: { String(prevMemoizedCallback === memoizedCallback)}</p>
      <p>is prevUnMemoizedCallback === to unMemoizedCallback: { String(prevUnMemoizedCallback === unMemoizedCallback) }</p>
      <p><button onClick={memoizedCallback}>memoizedCallback</button></p>
      <p><button onClick={unMemoizedCallback}>unMemoizedCallback</button></p>
      <p><button onClick={() => changeState({ prevMemoizedCallback: memoizedCallback, prevUnMemoizedCallback: unMemoizedCallback })}>update State</button></p>
    </>
  );
};

export default ForUseCallback;