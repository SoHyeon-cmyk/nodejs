import Greeting from './Greeting';
import './App.css';
import ToggleSwitch from './ToggleSwitch';
import UserForm from './UserForm';
import Student from './Student';
import Product from './product';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ToggleSwitch />
      <UserForm/>
      <Student/>
      <Product/>
    </div>
  );
}

export default App;
