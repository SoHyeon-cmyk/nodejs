import { useId } from 'react';
import './App.css';


function App() {
  // useId는 고유한 아이디를 만들떄 이용
  const id = useId()
  console.log(id)


  return (
    <div className="App">
      <Myinput />
      <Myinput />
      <Myinput />

      {
        function Myinput() {
          const id = useId()
          return (

            <div>
              <label htmlFor={`${id}-name`}>이름</label>
              <input type="text" id={`${id}-name`} />
              <br />
              <label htmlFor={`${id}-age`}>나이</label>
              <input type="text" id={`${id}-age`} />
              
            </div>
          )
        }
      }
      


    </div>
  );
}

export default App;
