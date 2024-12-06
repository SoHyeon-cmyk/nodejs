import React,{useEffect,useState, useContext} from 'react'
import { ActivityInput, ActivitySectionHeader, ActivitySelect, ActivityWriteBtn, ActivityBody, ActivityFooter } from '../styles/activity.styles'
import ActivityCard from './ActivityCard'
import { Pagination } from '@mui/material'
import axios from 'axios'
import {UserContext} from '../App'

const ActivitySection = () => {
  //acceccToken을 전역상태에서 현재 컴포넌트로 가져옴
  const {accessToken} = useContext(UserContext);
  const cntPerPage = 4; //한페이지당 보여주는 카드 수.
  //게시물 리스트를 담을 상태변수
  const [activityList, setActivityList] = useState([]);
  //페이지를 저정할 상태변수
  const [totalPage, setTotalPage] = useState(1)
  //마지막 페이지를 저장할 상태변수
  const [currentPafe,setCurrentPage] = useState(1);

  useEffect(() => {
    // order = 정렬방법, limit = 한페이지에 보여질 카드수, page = 현재 페이지
    let tmp = async () =>{
      try{
        if(accessToken === null){
          return
        }
        let res = await axios.get(`/api/activities?
        {order}&limit=${cntPerPage}&page=${currentPage}&q=${searchText}`,
        {headers:{Authorization}:`Bearer ${}`}

        //res.data = ㅅ버에서 보내준 객체
        //res.data.total_cnt = 전체 게시물 갯수 => 필요한 페이지 갯수 계산
        //전체 게시물 갯수 = 10, 한페이지당 게시글 카드 갯수 3/ 총페이지 = 4(반올림)
        //총페이지 갯수 = 올림(전체게시글갯수 / 한페이지당게시글 갯수)
        setTotalPage(Math.ceil(res.data.total_cnt / cntPerPage))
        setActivityList(res.data.activityList);
        console.log(activityList)

      }catch(err){
        console.log(err)
        alert('게시글을 불러오다 오류가 발생했습니다.')
      }
  
    } 
    tmp();
  
  })
  return (
    <section>
      <ActivitySectionHeader>
        <ActivityInput />
        <ActivitySelect>
          <option>최신순</option>
          <option>오래된순</option>
          <option>좋아요순</option>
          <option>조회수순</option>
        </ActivitySelect>
        <ActivityWriteBtn>글 쓰기</ActivityWriteBtn>
      </ActivitySectionHeader>
      <ActivityBody>
        {
          activityList.amp((el) =>{
            <activityCard
            key={el.id}
            activity={el}
            />
          })
        }
      </ActivityBody>
      <ActivityFooter>
        <Pagination count={20} />
      </ActivityFooter>
    </section>
  )
}

export default ActivitySection