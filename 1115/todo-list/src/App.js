import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useState ,useRef, useCallback} from 'react'


function App() {
    //todoListItem에 들어갈 데이터 배열


  const [todos,setTodos] = useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked:true,
    },
    {
      id:2,
      text:'컴포넌트 스타일링 해보기',
      checked:true,
    },
    {
      id:3,
      text:'일정 관리 앱 만들어 보기',
      checked:false,
    }
  ])

  //새로운 객체를 만들 때마다 아이디 값을 1씩더해야 하므로 useRef훅을 사용하여 관리
  //다음에 추가된 객체에 아이디값은 4이므로 초기값을 4로 전달
  const nextId = useRef(4)

  //아래 TodoInput에서 입력한 값을 파라미터(text)로 전달받아 todos배열에 추가하는 함수
  const onInput = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos.concat(todo)) //새 객체를 todos에 추가 가능 (...todos,todo)와 같다
    nextId.current += 1; //nextId의 값을 1씩 증가
  },[todos]);

const onRemove = useCallback((id)=>{
  //id값이 일치하지 않는 배열 요소만 새로운 배열로 생성하여 todos에다가 다시 할당
  setTodos(todos.filter(todo => todo.id !== id))
  //  todos.필터로 todo를 받아 아이디값과 ↑일치 하지 않으면 반환
},[todos])

const onToggle = useCallback((id) =>{
  setTodos(
    todos.map(todo => 
      // todo.id와 해당리스트의 id가 일치하면 checked값을 반전해서 할당
      //일치하지 않으면 리스트아이템을 그대로 할당
      todo.id === id ? {...todo, checked : !todo.checked} : todo
    )
  )
},[todos])

  return (
<>

{/* TodoInput 컴포넌트를 TodoContainer의 자식컴포넌트로 전달 */}
<TodoContainer >
  {/* todos배열에 새 객체를 추가하는 함수를 TodoInput으로전달 */}
  <TodoInput onInput={onInput}/>
  {/* todos상태 배열을 TodoList컴포넌트의 props로 전달 */}
  <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
</TodoContainer>

</>
  );
}

export default App;
