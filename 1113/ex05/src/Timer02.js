import React, { useState, useEffect } from 'react';

const Timer02 = () => {

  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(()=>{
      setCount(prevCount => prevCount +1) //이코드는 마운트 될 때 실행되기 때문에 그냥 count상태 값에 1을 더해 전달하면 값이 증가안함
    },1000)//useState값을 인자로 받아서 그 값에 1을 더해서 설장함수로 전달하면 계속 증가된 값을 전달할 수 있다.

    //클린업 함수 반환
    return()=>{
      clearInterval(timer) //컴포넌트가 언마운트 될때 clearInterval로 setInterbal메서드 종료
    }
  },[])

  return (
    <div>
      <p>Timer: {count}s</p>
    </div>
  );
};

export default Timer02;