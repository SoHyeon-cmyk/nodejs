import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './auth/Signup';
//import ExpressTest from './ExpressTest';

function App() {
  return (
    <Router>
      <Routes>
        {/*Signup컴포넌트를 메인페이지로 설정 */}
        <Route path="/" element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
