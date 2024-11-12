//함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용 가능
const Mycomponent = ({name = "졸려요", children}) => {
  //children = 자식 컴포넌트
  return (
    <div>
      {name} 집가고 싶어요. <br/>
      children값은 {children} 입니다.
    </div>
  )
}

export default Mycomponent