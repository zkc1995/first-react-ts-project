/**
 * 语法：const [state, setState] = useState(initialState);
 * 解析：
 *    state => 定义一个state状态（变量）
 *    setState => 定义一个修改state的方法
 *    useState(initialState) => 使用useState hooks给状态一个初始值
 * 
 *    setState方法可以传入要改变的参数也可传入一个回调函数(参数为当前状态值)
 * 
 * 注：官方文档还提及到一个懒初始化状态（Lazy initial state）:在初始化一个比较复杂的状态(官方说的是创建一个需要耗费大量计算才能得出的结果)时，则传入一个函数
 *    原文： If the initial state is the result of an expensive computation, you may provide a function instead
 *    使用方法如下：用一个回调函数来进行返回
 *    const [state, setState] = useState(() => {
 *      const initialState = someExpensiveComputation(props);
 *      return initialState;
 *    });
 *    具体应用目前还未遇到，后面有遇到再来进行补充
 * 
 */

import React, { useState } from 'react';

const initialState = 0;

const ForUseState: React.FC = () => {
  const [count, setCount] = useState(initialState);

  return (
    <div className="bottom-line">
      <h3>关于useState的学习</h3>

      Count：{count}&nbsp;
      <button onClick={() => setCount(initialState)}>重置(reset)</button>&nbsp;
      <button onClick={() => setCount((preState) => preState + 1)}>+1</button>&nbsp;
      <button onClick={() => setCount((preState) => preState - 1)}>-1</button>
    </div>
  );
};

export default ForUseState;