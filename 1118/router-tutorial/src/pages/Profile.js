import { useParams } from "react-router-dom";

const data = {
  minsu: {
    name: "민수",
    message: "hello"
  },
  gildong: {
    name: "길동",
    message: "bye"
  }
};

const Profile = () => {
  const params = useParams();

  let profile = data[params.username];
  
  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.message}</p>
        </div>
      ):(
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  )
}

export default Profile;