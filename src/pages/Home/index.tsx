import React from 'react';

const Home: React.FC = () => {
  // const [count, setCount] = useState(0);
  
  /**
   获取当前值，
    操作案例：点击+1，然后点击显示弹窗，再继续点击+1
    如不使用useRef时，只能显示点击t
    const finalCount = useRef(count);
  
    useEffect(() => {
      finalCount.current = count;
    });
  
    const handdleAlertClick = () => {
      setTimeout(() => {
        alert(`you clicked on: ${finalCount.current}`);
      }, 3000);
    };
   * 
   */

  return (
    <div>
      {/* You clicked { count } times
      <div>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={handdleAlertClick}>show alert</button>
      </div> */}
      home
    </div>
  );
};

export default Home;