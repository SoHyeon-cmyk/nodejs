import Greeting from './Greeting';
import './App.css';
import ToggleSwitch from './ToggleSwitch';
import UserForm from './UserForm';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ToggleSwitch />
      <UserForm/>
      <Student/>
    </div>
  );
}

export default App;
