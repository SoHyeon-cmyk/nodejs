import { useReducer, useState } from 'react';
import './App.css';

const reducer =(state,action)=>{
  console.log('reducer가 일을 합니다',state,action)
  switch(action.type){
    
  }
}
function App() {
  //복잡한 state관리 
  // dispatchEvent(요구)
  // useActionState(어떻게 요구)
  // Reducer 상태 업데이트

  const [number, setNumber] = useState(0)
  const [money,dispatch] = useReducer(reducer,0)

  return (
    <div className="App">
      <h2>은행</h2>
      <p>잔고: {number} 원</p>
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} step="1000"/>
      <br />
      <button onClick={()=>{
        dispatch({type:'deposit' , payload : number})
      }}>
        예금</button>
      <button>출금</button>
    </div>
  );
}

export default App;
