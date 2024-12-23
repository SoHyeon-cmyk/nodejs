import React, { useEffect } from 'react';


const Timer = () => {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log('타이머가 돌아가고 있어요')
    },1000)
    return()=>{
      clearInterval(timer)
      console.log('타이머가 멈췄습니다.')
    }

  })
  return (
    <div>
      타이머가 돌아가고 있어요.
    </div>
  );
};

export default Timer;