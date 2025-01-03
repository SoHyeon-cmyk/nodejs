import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Nav from './componenets/Nav';
import Footer from './componenets/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import QuickButton from './componenets/QuickButton';
import ProductPage from './componenets/ProductPage';
import UploadPage from './componenets/UploadPage';
import { createContext, useState } from 'react';
import data from './data/datafresh';


const DataContext=createContext();

function App() {

  let [petData]=useState(data);
  console.log(petData)
  return (
    <DataContext.Provider value={{petData}}>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/uploadpage" element={<UploadPage />} />
            <Route path="/productpage" element={<ProductPage />} />
          </Routes>
          <Footer />
          <QuickButton />
      </div>
    </DataContext.Provider>
  );
}

export default App;
export {DataContext}
