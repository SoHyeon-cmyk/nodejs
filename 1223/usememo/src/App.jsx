import { useMemo, useState } from 'react';
import './App.css';

const hard = (number) => {
  console.log('집가고싶다...')
  for(let i=0; i<999999999; i++){}
  return number+10000
}
const easy = (number) => {
  console.log('너무피곤하다...')
  return number+1
}
function App() {
  //usememo usecallback
  //동일한 값을 반복적으로 나타내어야 할때 맨처음 값을 저장(메모리에) 필요할때마다 호출

  //const value = usememo(()=>{},[])
  const [hardNumer , setHardNumber] = useState(1)
  const [easyNumer , setEasyNumber] = useState(1)
  
  const hardSum = useMemo(()=>{
    return hard(hardNumer)
  },[hardNumer])

  const easySum = useMemo(()=>{
    return easy(easyNumer)
  },[easyNumer])

  return (
    <div className="App">
      <h2>계산1</h2>
      <input type="number" value={hardNumer} onChange={(e)=>{setHardNumber(parseInt(e.target.value))}}/>
      <span>+ 10000 = {hardSum}</span>
      <br />
      <h2>계산2</h2>
      <input type="number" value={easyNumer} onChange={(e)=>{setEasyNumber(parseInt(e.target.value))}}/>
      <span>+ 1 = {easySum}</span>
    </div>
  );
}

export default App;
