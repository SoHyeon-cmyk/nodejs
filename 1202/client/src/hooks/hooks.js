import { useEffect,useContext } from 'react';
import { UserContext } from "../App";
import { replace, useNavigate } from "react-router-dom";

export const useAuth = () =>{
  // 전역 state가져오기
  const {accessToken ,setAccessToken} = useContext(UserContext)
  const navigate = useNavigate();
  useEffect(() =>{
    // 로그인이 안된 상태 localStorage의 accessToken = null
    if(localStorage.getItem('accessToken') === null){
      alert('로그인이 필요한 페이지 입니다.');
      navigate('/login',{replace:true})    //로그인 페이지로 이동, 뒤로가기 방지
      return//함수종료
    }

    //로그인은 되었으나 새로고침한 상태accessToken있음
    //전역 상태변수 accessToken = null
    if(accessToken === null){
      setAccessToken(localStorage.getItem('accessToken'))//전역 상태변수 accessToken에 토큰을 넣어줌
      return
    }

    //로그인, 새로고침x,로컬스토레지 토큰존재, 전역상태변수 토큰 존재
  },[accessToken,setAccessToken,navigate]) //셋중 변경사항 있을시 실행
}