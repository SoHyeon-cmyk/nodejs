import React, {useState,useContext} from 'react'
import { CardImg, CardWrap, CardContent, CardTitle, CardDetail, CardLikeButton } from '../styles/activityCard.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import formatDateKorean from '../utils/formatDate';
import { useNavigate } from 'react-router-dom';
import {UsersContext} from '../App'
import axios from 'axios';

const ActivityCard = (props) => {
  //좋아요 버튼을 눌렀는지 안눌렀는지 제어하는 상태변수
  const [isLiked, setIsLiked] = useState(props.activity.liked === 'yes'); //yes는 true no 는 false
  const navigate = useNavigate();
  const {accessToken} = useContext(UsersContext);
  
  const onLikeClick = async () => {
    if(accessToken === null ) {
      alert('로그인 후 이용해 주시길 바랍니다.')
      navigate('/login');
      return
    }

    //하트가 안눌린 상태
    if(isLiked == false) {
      //지금 로그인 한 사람이 해당 게시물에 하트를 누른것.
      try{
        await axios.post('/api/like',
           {id:props.activity.id},
           {headers:{Authorization : `Bearer ${accessToken}`}}
          );
      }catch(err){
        console.log(err)
        alert('현재 서버에 문제가 있습니다.')
      }
    }else{//눌린 하트 해제
      //지금 로그인 한 사람의 데이터 삭제
      try{
        await axios.delete('/api/like',{
           data : {id:props.activity.id},
           headers :{Authorization : `Bearer ${accessToken}`}
          })
      }catch(err){
        console.log(err)
        alert('잠시 후 다시 시도해주세요.')
      }
    }

  }
  return (
    <CardWrap>
      <CardImg imgURL={props.activity.img_url[0]}>
        {/*클릭시 isLiked 상태 변수값을 변경 */}
        <CardLikeButton onClick={onLikeClick}>
          {/*isLiked가 true면 빨간색 하트 아이콘을 표시하고 false면 하얀색 선으로 된 하트 아이콘을 표시 */}
          {isLiked ? <FavoriteIcon style={{color: 'lightsteelblue'}} /> : <FavoriteBorderIcon style={{color: 'white'}} />}
        </CardLikeButton>
      </CardImg>
      <CardContent>
        <CardTitle>{props.activity.title}</CardTitle>
        <CardDetail>{props.activity.content}</CardDetail>
        <CardDetail>
          작성자: {props.activity.writer_email}
        </CardDetail>
        <CardDetail>
          작성일자: {formatDateKorean(props.activity.createdDate)}
        </CardDetail>
        <CardDetail>
          좋아요: {props.activity.like}
        </CardDetail>
        <button onClick={() => { navigate(`/activity/${props.activity.id}`)}}>자세히 보기</button>
      </CardContent>
    </CardWrap>
  )
}

export default ActivityCard