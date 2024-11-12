import './App.css';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import StyledComponent from './components/StyledComponent';
import ParentComponent from './components/ParentComponent';
//부모 컴포넌트에서 자식컴포넌트를 import 해서 불러옴
import MultiplicaitionTable from './components/Mutiplication';

function App() {
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <UserProfile />
      <TodoList />
      <StyledComponent />
      <ParentComponent />
      {/* import후의 컴포넌트 사용 가능 */}
      <MultiplicaitionTable/>
    </div>
  );
}

export default App;