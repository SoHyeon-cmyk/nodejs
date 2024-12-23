import React, { useEffect, useRef, useState } from 'react';


const App1 = () => {
  const [count, setCount] = useState(1)
  // const [renderCount, setRenderCount] = useState(1)
  const renderCount=useRef(1)

  useEffect(()=>{
    renderCount.current=renderCount.current+1
    console.log('렌더링:', renderCount.current)
    // setRenderCount(renderCount+1)
  })

  // useRef는 변화는 감지하지만 그 변화가 렌더링을 발생기키면 안될떄 유용
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>{setCount(count+1)}}>더하기</button>
    </div>
  );
};

export default App1;