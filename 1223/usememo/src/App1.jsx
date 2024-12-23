import React, { useEffect, useMemo, useState } from 'react';

const App1 = () => {
  const [number,setNumber] = useState(0)
  const [iskorea,setKorea] = useState(true)

  // const location = iskorea ? "한국" : "외국";
  
  const location = useMemo (()=>{ //컴포넌트 최적화
    return{
      country : iskorea ? "한국" : "외국",

    }
  },[iskorea])

  useEffect(()=>{
    console.log('useEffect 호출')
  },[location])
  
  return (
    <div>
      <h2>하루에 운동을 몇번 하나요?</h2>
      <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}} />
      <hr />
      <h2>어느 나라에 있나요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={()=> setKorea(!iskorea)}>비행기를 타자</button>
    </div>
  );
};

export default App1;