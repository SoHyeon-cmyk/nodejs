import './App.scss';
import { Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Users from './pages/Users';




function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
        </Routes>
      </Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
