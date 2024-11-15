import Article from './Article';
import Aside from './Aside';
import Header from './Header';
import Nav from './Nav';
import './App.css';
import { useState } from 'react';


function App() {

  //클릭한 아티클 컴포넌트에 해당하는 비디오 소스 경로를 담을 상태
  const [selectedVideo, setSelectedVideo] = useState(null)

  //함수가 호출되면 비디오소스 경로 없데이트
  const handleArticleClick = (video) => {
    setSelectedVideo(video)
  }

  //함수 호출시 비디오 소스 경로 담은 selectedVideo 비워줌(닫기버튼)
  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <main>
      <Header/>
      <Nav/>
      <section>
        {['vids/vid1.mp4', 'vids/vid2.mp4', 'vids/vid3.mp4', 'vids/vid4.mp4'].map((video,index) => (
          <Article key ={index}
          video={video}
          onClick={() => handleArticleClick(video)}
          />
        ))}
      </section>
      {/* Aside컴포넌트로 현재 선택된 비디오 소스 경로를 전달  handleClose함수 전달(닫기) */}
      <Aside video={selectedVideo} onClose={handleClose} />
    </main>
  );
}

export default App;
