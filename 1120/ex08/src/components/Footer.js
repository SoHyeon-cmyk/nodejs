import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  //footer의 경우 setIsDark도 전달한다.
  const {isDark, setIsDark} = useContext(ThemeContext);
  //함수가 호출되면 setIsDark(설정함수)를 실행하고 인자로 isDark의 결과의 반대값을 보내줍니다.
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <footer 
      className='footer' 
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
      }}  
    >
      {/*버튼을 클릭하면 toggleTheme함수를 실행*/}
      <button onClick={toggleTheme}>Dark Mode</button>
    </footer>
  )
}

export default Footer