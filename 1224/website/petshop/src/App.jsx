import './App.scss'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
