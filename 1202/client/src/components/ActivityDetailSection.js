import React, { useState , useEffect, useContext} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle, WriteBtn } from '../styles/activityDetail.styles';
import { UserContext } from '../App';
import axios from 'axios';

const ActivityDetailSection = (props) => {
  const [isLiked, setIsLiked] = useState(false); //좋아요 여부
  const [accessToken] = useContext(UserContext);

  //게시글 정보 = 한번에 몰아서 객체로 저장
  const [ activity, setActivity] = useState({
    id:0,
    title:'제목이 올자리',
    content:'내용이 올 자리',
    writer_email:'이메일이 올 자리',
    created_date:'작성일이 올 자리',
    updated_date:'수정일이 올 자리',
    activity_view:'조회수',
    activity_like:'좋아요',
    liked:'눌린 좋아요',
    img_url:'이미지 링크'
  })

  useEffect(() =>{
    let tmp = async () =>{
      if(accessToken === null) {
        return
      }
      let res = await axios.get(`/api/activities/${props.activityId}` ,
        {headers:{Authorization : ` Bearer ${accessToken}`}})
    }
    tmp();
  },[props.activityId,accessToken])
  return (
    <section>
      <BoardDetailWrap>
        <BoardTitle>
          제주도 여행 후기
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span>좋아요:57</span>
            <span>
              {activity.activity_like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
            </span>
          </div>
        </BoardTitle>
        <BoardInfoWrap>
          <p>작성자</p>
          <p>123@test.com</p>
          <p>조회수</p>
          <p>50</p>
        </BoardInfoWrap>
        <BoardInfoWrap>
          <p>작성일자</p>
          <p>2021-09-20</p>
          <p>수정일자</p>
          <p>2021-09-09</p>
        </BoardInfoWrap>
        <BoardInfoWrap>
          <p>좋아요</p>
          <p>40</p>
        </BoardInfoWrap>
        <BoardContent>
          게시물 내용
        </BoardContent>
        <div style={{
          alignSelf: 'flex-end',
          display: 'flex',
          columnGap: '10px'
        }}>
          <WriteBtn>수정</WriteBtn>
          <WriteBtn style={{ backgroundColor: 'red' }}>삭제</WriteBtn>
        </div>
      </BoardDetailWrap>
    </section>
  )
}

export default ActivityDetailSection