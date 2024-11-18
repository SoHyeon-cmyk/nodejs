import React,{useState,useEffect} from 'react'
import { FaBars, FaStickyNote, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';




//App컴포넌트에서 memeber라는 props를 받아옴
const Profile = () => {
  //useState로 profile상태 정의, 초기값으로 profiles.member1을 설정
  const [Profiles, setProfile] = useState(profiles.member1)
  useEffect(()=> {
    //member값이 변경될때마다 profile상태를 업데이트
    // setProfile(profiles[member] || profiles.member1)
  },[])

  const profiles = {
  member1: { //member1, member2 등의 key는 해당 멤버의 프로필 스타일을 설정합니다
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.493)',
    iconColor: '#35e0f7'
  },
  member2: { 
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.493)',
    iconColor: '#55f5b2'
  },
  member3: { 
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.493)',
    iconColor: '#ff11c4'
  },
  member4: { 
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.493)',
    iconColor: '#a011ff'
  }
}
  return (
    <div className="profile-container" style={{ backgroundColor: Profile.backgroundColor }}>
      <section>
        {/* 네비게이션메뉴는 Link컴포넌트로 감싸주고 아이콘은 profile객체의 스타일에 따라 색상적용 */}
        <nav className="menu">
          <Link to="#">
            <FaBars style={{ color: Profile.iconColor }} />
          </Link>
          <Link to="#">
            <FaStickyNote style={{ color: Profile.iconColor }} />
          </Link>
        </nav>
      </section>
      </div>
  )
}

export default Profile