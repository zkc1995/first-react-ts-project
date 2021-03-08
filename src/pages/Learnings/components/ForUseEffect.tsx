/**
 * 语法：useEffect(didUpdate[,effectModules]));
 * 
 * 用法：(接收一个函数作为参数，且尽可能是有效代码)Accepts a function that contains imperative, possibly effectful code；
 *      默认情况下，useEffect在组件渲染完成后触发，也可选择在某些值修改时再触发这个函数(即传入第二个参数数组[]，传入函数中使用到的所有影响值)
 * 1. 当第二个参数未传时，只要有状态改变就会引起函数调用（包括初始化）；如果有多个状态就会多次触发
 * 2. 当第二个参数传空数组时，只会在组件渲染时触发，后续无论怎么修改状态都不会触发，个人理解相当于componentDidMount
 * 3. 当第二个传入某个参数时，该参数发生变化时就会触发函数
 * 4. 当第二个传入多个参数时，其中某个参数发生变化时就会触发函数
 * 
 * 注：还有一个useLayoutEffect的钩子
 */
import React, { useEffect, useState } from 'react';

const ForUseEffect: React.FC = () => {
  const [hasChange, setChange] = useState(false);
  const [higher, setHigher] = useState(false);

  // useEffect(() => {
  //   console.log('我什么都没传');
  // });

  useEffect(() => {
    console.log('我传了空数组');
  }, []);

  // useEffect(() => {
  //   console.log('我传了一个状态');
  // }, [hasChange]);

  // useEffect(() => {
  //   console.log('我传了两个状态');
  // }, [hasChange, higher]);

  return (
    <div className="bottom-line">
      <h3>关于useEffect的学习</h3>
      <div>
        我{ hasChange ? '变了' : '没变' }&nbsp;
        <button onClick={() => setChange((prevState) => !prevState)}>变（change）</button>
      </div>
      <div>
        它{ higher ? '长高了' : '没长高' }&nbsp;
        <button onClick={() => setHigher((prevState) => !prevState)}>变（change）</button>
      </div>
    </div>
  );
};
 
export default ForUseEffect;