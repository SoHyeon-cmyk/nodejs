import React from 'react'


//App컴포넌트로 부터 props로 비디오 소스 경로를 전달 받음
//onClick = 부모 컴포넌트에서 전달받은 onClick 이벤트핸들러
const Article = ({video, onClick}) => {

  const handleMouseEnter = (e) => {
      //article 요소에 마우스가 올라가면 실행
      e.currentTarget.querySelector("video").play();
    }
    const handleMouseLeave = (e) => {
      //마우스가 떠나면 실행
      //↓이벤트가 발생된 요소(article요소)
      e.currentTarget.querySelector("video").pause();
      
    }
  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(video)}
    >
      <div className="inner">
        <div className="txt">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <figure>
          <video src={video} muted loop></video>
        </figure>
      </div>
    </article>
  )
}

export default Article