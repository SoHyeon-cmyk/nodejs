import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>

  );
}

export default App;
