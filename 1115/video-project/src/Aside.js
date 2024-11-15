import React from 'react'
import { useEffect, useRef } from 'react';

//video = 부모 컴포먼트로 부터 전달받은 비디오 소스 경로, 
// onClose = 부모 컴포먼트로 부터 전달 받은 닫기버튼 함수
const Aside = ({video} , onClose) => {
  const videoRef = useRef(null);//비디오 요소를 참조할 useRef훅

    useEffect (() => {
      if (videoRef.current){//videoRef.current를 통해 해당 DOM을 참조했는지 여부를 판단
        if(video){
          videoRef.current.play()
        }else{
          videoRef.current.pause();
        }
      }
    },[video])
  return (
    //video 소스가 있으면 on추가 없으면 on클래스제거
    <asdie className={video ? "on" : ""}>

          <div className='txt'>
            <h1>Title</h1>
            <p>Description</p>
            {/* span 요소를 클릭하면 onClose 함수를 호출하여 Aside컴포넌트를 닫음 */}
            <span onClick={onClose}>CLOSE</span>
          </div>
          <figure>
          <video src={video} ref={videoRef} loop muted></video>
          </figure>

    </asdie>
  )
}

export default Aside