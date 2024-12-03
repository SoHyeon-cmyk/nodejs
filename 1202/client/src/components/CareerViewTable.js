import React, {useState, useEffect} from 'react'
import { AddBox } from '../styles/career.styles';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import axios from 'axios';

const CareerViewTable = () => {
  //데이터베이스에서 전달받은 데이터를 담을 상태 변수
  const [careerList, setCareerList] = useState([]);

  //state변수 4개, 사용자가 input태그에 입력한 값을 기억하는 용도
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    //CareerViewTable 컴포넌트가 화면에 보여질 때 실행되는 코드
    const fetchCareerList = async () => {
      try{
        //get방식으로 api요청
        let res = await axios.get('/api/career');
        setCareerList(res.data);//응답받은 데이터를 careerList상태에 저장
        //console.log(careerList)
      }catch(err){
        console.log(err)
      }
    }
    fetchCareerList();//함수 호출
  }, []);//컴포넌트가 처음 생성될때만 호출하기 위해 두번째 인자로 빈배열을 추가

  //입력한 값을 데이터베이스에 추가하는 함수
  const onAddCareer = async () => {
    //console.log(company, position, startDate, endDate);
    if(company === ''){//회사명을 입력하지 않았을 경우
      alert('회사명을 입력해주세요');
      return; //onAddCareer함수를 바로 종료
    }
    if(position === ''){
      alert('직책을 입력해주세요');
      return;
    }
    if(startDate === ''){
      alert('시작일을 입력해주세요');
      return;
    }

    //시작일이 오늘 날짜보다 늦으면 안됨
    const today = new Date();
    //startDate에 담겨있는 날짜 정보(string)를 date정보로 변경(시간을 0시0분0초로 설정)
    const targetStartDate = new Date(startDate+"T00:00:00")
    if(targetStartDate > today){//시작일이 현재 시간보다 나중일경우
      alert('시작일은 오늘 날짜보다 늦을 수 없습니다')
      return;
    }

    if(endDate !== ''){ //종료일이 비어 있지 않으면 실행
      const targetEndDate = new Date(endDate+"T00:00:00");
      if(targetEndDate < targetStartDate){//종료일이 시작일 보다 빠를 경우
        alert('종료일은 시작일보다 빠를 수 없습니다');
        return;
      }
      if(targetEndDate > today){//종료일이 현재시간보다 늦을 경우
        alert('종료일은 오늘 날짜보다 늦을 수 없습니다');
        return;
      }
      //정상적으로 실행되는 코드
    }

    try{
      //api로 post요청으로 해당 데이터를 전달 합니다.
      let res = await axios.post('/api/career', {
        company, position, startDate, endDate
      });
      //res.data에는 방금 추가한 '객체'가 들어있음
      alert('추가 완료!');
      console.log(res.data);
      window.location.reload(); //새로고침
    }catch(err){
      console.log(err)
    }
  }

  return (
    <section>
      <AddBox style={{marginBottom: '50px'}}>
        <thead>
          <tr>
            <th rowSpan={2}>회사명(활동)</th>
            <th rowSpan={2}>직책(활동내용)</th>
            <th colSpan={2}>활동 일자</th>
          </tr>
          <tr>
            <th>시작일</th>
            <th>종료일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*값이 변경될때마다 상태변수를 입력한 값으로 할당 */}
            <td><input onChange={e => setCompany(e.target.value)} /></td>
            <td><input onChange={e => setPosition(e.target.value)} /></td>
            <td><input onChange={e => setStartDate(e.target.value)} type='date' /></td>
            <td><input onChange={e => setEndDate(e.target.value)} type='date' /></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              {/*추가 버튼을 클릭하면 onAddCareer이 호출됨 */}
              <button onClick={onAddCareer}>추가</button>
            </td>
          </tr>
        </tfoot>
      </AddBox>
      <AddBox>
        <thead>
          <tr>
            <th><input type='checkbox' /></th>
            <th>회사명</th>
            <th>직책</th>
            <th>일자</th>
            <th><DeleteSweepIcon/></th>
          </tr>
        </thead>
        <tbody>
          {careerList.map((e) => 
            <tr key={e.id}>
              <td><input type='checkbox' /></td>
              <td>{e.company}</td>
              <td>{e.position}</td>
              <td>
                {e.start_date} - {e.end_date}
              </td>
              <td style={{
                display:'flex', justifyContent: 'center'
              }}>
                <DeleteSweepIcon />
              </td>
            </tr>
          )}
        </tbody>
      </AddBox>
    </section>
  )
}

export default CareerViewTable