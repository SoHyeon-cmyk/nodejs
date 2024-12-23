import { useRef, useState } from 'react';
import './App.css';

function App() {
  const countRef = countRef(0)
  let countvar = 0
  // const [count ,setCount]= useState(0)
  // console.log('렌더링..')
  // const increaseCountState = () => {
    //   setCount(count + 1)
    // }

    const deRendering = ()=>{
      
    }
  const increaseVar = () => {
      countvar(countvar + 1)
      console.log=('var')
    }
    const [render ,setRender]= useState(0)
  const increaseCountRef = () => {
    countRef.current=countRef.current+1
  }


  return (
    <div className="App">
      {/* <p>State:{count}</p> */}
      <p>{countRef.current}Ref:</p>
      <p>var:{countvar}</p>
      {/* <button onClick={increaseCountState}>State 변경</button> */}
      <button onClick={increaseVar}>var 변경</button>
    </div>
  );
}

export default App;
