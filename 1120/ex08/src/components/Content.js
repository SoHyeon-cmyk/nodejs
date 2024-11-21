import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';

const Content = () => {
  //useContext로 ThemeContext에서 전달받은 isDark를 변수에 할당
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext)

  return (
    <div 
      className='content' 
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}  
    >
      <h1>{user}님 좋은 하루 보내세요</h1>
    </div>
  )
}

export default Content