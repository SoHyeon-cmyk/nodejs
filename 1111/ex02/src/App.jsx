import './App.css';
import Message from './Message';
import PersonTable from './PersonTable';

function App() {
  //PersonTable컴포넌트로 전달할 데이터
  let persons1 = [//id는 map의 key값으로 전달하기 위한 유니크한 값
    {id: 31, name: '홍길동', age: 16},
    {id: 32, name: '임꺽정', age: 19},
    {id: 33, name: '전우치', age: 20}
  ]
  //배열요소를 역순으로 변경
  let persons2 = persons1.slice(0);//persons1의 배열을 persons2로 복제
  //es6문법 : [...persons1] = persons1.slice(0)
  persons2.reverse();//배열의 순서를 반전
  return (
    <div>
      {/*value속성과 color속성이 Message컴포넌트의 props객체로 전달됨, 여기서 size값은 string타입이 아니라 number타입이라 {}로 묶어야 한다 */}
      <Message value="안녕하세요" color="blue" size={20}/>
      <Message value="안녕하세요" color="blue" size={30}/>
      <Message value="안녕하세요" color="blue" size={40}/>
      {/*persons1배열을 persons값으로 PersonTable컴포넌트로 전달 */}
      <PersonTable persons = {persons1}/>
      <hr />
      <PersonTable persons = {persons2}/>
    </div>    
  );
}

export default App;
