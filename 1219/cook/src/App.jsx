import axios from 'axios'
import {useState, useEffect, createContext} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Recipe from './pages/Recipe'
import Category from './pages/Category'
import Nav from './components/Nav'
import './scss//App.scss'


const DataContext = createContext()

function App({children}) {
  const APIKEY = process.env.REACT_APP_KEY;
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  // const [loading, setLoading] = useState({state:true,data:[]})

  const getDB = async () => {
    try{//1f2bb53f6f564d529ecd
      const {data} = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${APIKEY}/COOKRCP01/json/1/10`)
      setData(data.COOKRCP01.row)
      console.log(data)

    }catch(err){
      console.error('데이터 불러오기 실패', err)
    }
  }

  useEffect(()=>{
    getDB();
    setLoading(false)

  },[])

  return (
    <DataContext.Provider value ={{data,loading}}>
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
      <Route path='category/:category' element={<Category/>}/>
    </Routes>
    </DataContext.Provider>
  );
}


export default App;
