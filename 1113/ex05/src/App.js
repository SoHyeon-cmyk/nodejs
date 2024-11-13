import {useState} from 'react'
import Counter from './Counter';
import Timer from './Timer';
import LifeCycle from './LifeCycle';
import Timer02 from './Timer02';
import SyncedInputs from './SyncedInputs';
import './App.css';

function App() {
  //visible이 true면 Counter 컴포넌트가 마운트되고 false면 언마운트
  const [visible, SetVisible] = useState(true)
  return (
    <div className="App">
      <h1>App</h1>
      <input type='checkbox' checked={visible}
      style={{height:"25px", width:"25px"}}
      onChange={e => SetVisible(e.target.checked)}/>
      

      {/* visible이 true일때 Counter를 마운트하고 false면 null을 반환하여 unmount */}
      {visible ? <Counter/> : null}
      {visible ? <Timer02/> : null}
      
      <Timer/>
      <LifeCycle/>
      <SyncedInputs/>
    </div>
  );
}

export default App;
