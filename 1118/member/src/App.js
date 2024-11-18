//라우터 임포트
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//profile.js 임포트
import Profile from './components/Pofile';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
	        {/*path 경로와 Profile컴포넌트의 props로 memeber값을 전달합니다*/}
          <Route path="/member1" element={<Profile member="member1" />} />
          <Route path="/member2" element={<Profile member="member2" />} />
          <Route path="/member3" element={<Profile member="member3" />} />
          <Route path="/member4" element={<Profile member="member4" />} />
          <Route path="/" element={<Profile member="member1" />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;