import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';

const Header = () => {
  //isDark가 true면 배경색을 검은색, 글자색은 흰색
  //false면 배경색은 밝은 회색, 글자색은 검은색으로 적용
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header 
      className='header' 
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}  
    >
      <h1>Welcome {user}</h1>
    </header>
  )
}

export default Header