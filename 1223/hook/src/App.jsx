import { useState } from 'react';//컴포넌트 상태관리 및 훅 생성 간편화와 업데이트 지원
import './App.css';

function App() {
  const [time , setTime] = useState(0)
  
  const handleClick = () =>{
    let newtime;
    if(time >= 23){
      newtime=0
    }else{
      newtime = time+1
    }
    setTime(newtime)
  }

  return (
    <div className="App">
      <span>{time}시</span>
      <br />
      <button onClick={()=>{handleClick()}}>click</button>
    </div>
  );
}

export default App;
