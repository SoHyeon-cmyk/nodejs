import { useState } from 'react';
import './App.css';
import Page from './components/Page';
//생성한 콘텍스트를 임포트
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  //현재 앱이 다크모드인지 아닌지 true, false로 제어
  const [isDark, setIsDark] = useState(false)
  return (
    //Page컴포넌트를 ThemeContext.Provider로 감싸 줍니다
    //ThemeContext.Provider는 value라는 prop을 하나 받습니다.
    //value안에는 전달하고자 하는 데이터를 넣으면 됩니다.
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        {/*Page 컴포넌트로 isDark와 setIsDark를 prop로 전달 */}
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
