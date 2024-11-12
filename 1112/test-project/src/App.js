import './App.css';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import StyledComponent from './components/StyledComponent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <UserProfile />
      <TodoList />
      <StyledComponent />
      <ParentComponent />
    </div>
  );
}

export default App;