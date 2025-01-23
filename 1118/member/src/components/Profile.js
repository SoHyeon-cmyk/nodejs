import {useState, useEffect} from 'react'
import {FaBars, FaStickyNote, FaEnvelope, FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';
//스타일시트
import '../styles/profile.css'

//profiles객체에 각 member에 대한 스타일 속성을 정의합니다.
const profiles = {
  //member1, member2 등의 key는 해당 멤버의 프로필 스타일을 설정합니다.
  member1:{ 
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.4)',
    iconColor: '#35e0f7',
    title: 'DECODELAB1'
  },
  member2:{ 
    backgroundColor: '#edffeb',
    imgShadow: '5px 15px 30px #bdccb780',
    btnBg: 'linear-gradient(45deg, #a0ff9d, #55f5b2)',
    btnShadow: '5px 10px 20px rgba(33, 250, 105, 0.3)',
    iconColor: '#55f5b2',
    title: 'DECODELAB2'
  },
  member3:{ 
    backgroundColor: '#fff3fd',
    imgShadow: '5px 15px 30px rgba(252, 99, 214, 0.2)',
    btnBg: 'linear-gradient(45deg, #ef74ff, #ff11c4)',
    btnShadow: '5px 10px 20px rgba(255, 17, 196, 0.4)',
    iconColor: '#ff11c4',
    title: 'DECODELAB3'
  },
  member4:{ 
    backgroundColor: '#f5f0ff',
    imgShadow: '5px 15px 20px rgba(183, 82, 250, 0.2)',
    btnBg: 'linear-gradient(45deg, #8e74ff, #a011ff)',
    btnShadow: '5px 10px 20px rgba(160, 17, 255, 0.4)',
    iconColor: '#a011ff',
    title: 'DECODELAB4'
  }
}
//App컴포넌트에서 member라는 props를 받아 옵니다
const Profile = ({member}) => {
  //useState로 profile 상태 정의, 초기값으로 profiles.member1을 설정
  const [profile, setProfile] = useState(profiles.member1)
  useEffect(() => {
   //member값이 변경될때마다 profile상태를 업데이트 
   setProfile(profiles[member] || profiles.member1)
  }, [member])
  return (
    //container는 profile객체의 스타일에 따라 배경색을 적용합니다/
    <div className='profile-container' style={{backgroundColor:profile.backgroundColor}}>
      <section>
        {/*내비게이션 메뉴는 Link컴포넌트로 감싸주고 아이콘은 profile객체의 스타일에 따라 색상을 적용합니다.*/}
        <nav className='menu'>
          <Link to="#">
            <FaBars style={{color: profile.iconColor}} />
          </Link>
          <Link to="#">
            <FaStickyNote style={{color: profile.iconColor}} />
          </Link>
        </nav>
        {/*프로필 이미지와 텍스트 표시 이미지 경로는 member props에 따라 변되고, profile객체의 스타일에 따라 그림자를 적용합니다. */}
        <article className='profile'>
          <img 
            src={`img/${member}.jpg`}
            alt='Profile'
            style={{boxShadow: profile.imgShadow}}
          />
          <h1>{profile.title}</h1>
          <h2>UI/UX INTERACTIVE DEVELOPER</h2>
          {/*Link 컴포넌트를 버튼으로 스타일링하고, profile객체의 스타일에 따라 배경과 그림자를 적용합니다. */}
          <Link
            to="#"
            className='btnView'
            style={{
              background: profile.btnBg,
              boxShadow: profile.btnShadow
            }}
          >
            VIEW MORE
          </Link>
        </article>
        <ul className='contact'>
          <li>
            <FaFacebookF style={{color: profile.iconColor}} />
            <span>Visit My Facebook page.</span>
          </li>
          <li>
            <FaEnvelope style={{color: profile.iconColor}} />
            <span>example@naver.com</span>
          </li>
        </ul>
        {/*모든 프로필에 대한 내비게이션 링크를 동적으로 생성 */}
        <nav className='others'>
          {/*prfiles객체의 key를 map으로 순회합니다. */}
          {Object.keys(profiles).map(m => (
            /*현재 순회중인 key값이 'member1'일 경우, key = member1, to ={/member1}, className = on, style ={{backgroundColor: proflies[member1].iconColor,...}} */
            <Link 
              key={m}
              to={`/${m}`}
              className={member === m ? "on" : "" } //member와 m이 일치하면 on클래스 추가하고 일치하지 않으면 제거
              style={{
                backgroundColor: profiles[m].iconColor,
                boxShadow: profiles[m].imgShadow
              }}
            />
          ))}
        </nav>
      </section>
    </div>
  )
}

export default Profile