import { useState } from 'react'
import './App.css';
import GroupComponent from './GroupComponent';

function App() {
  const [value, setValue] = useState(0);
  console.log('app호출됨')



  return (


    <div className='App'>
      <h1>CounterB</h1>
      <button onClick={()=> setValue (value + 1)}>{value}</button>
      <div className='box'>



      <GroupComponent/>
      </div>

      
    </div>
  );
}

export default App;
