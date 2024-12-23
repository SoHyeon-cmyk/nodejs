import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';


function App() {
  // useCallback도 useMemo와 같이 memoization을 최적화하기 위함
  // memoization 은 자주 사용하는 값을 반복적으로 받아오는 값을 계산해야 할 시 미리 계산값을 캐시에 저장하고 호출

  // useCallback(()=>{
  //   return value;
  // },[item])//의존성 배열에 있는 값이 변경되어야만 초기화

  const [number, setNumber] = useState(0)
  const someFunction = useCallback(() => {
    console.log(`someFunction:number : ${number}`)
  }, [])

  useEffect(() => {
    console.log(`someFunction이 변경 되었습니다.`)
  }, [someFunction])

  return (
    <div className="App">
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <br />
      <button onClick={someFunction}>click</button>
    </div>
  );
}

export default App;
