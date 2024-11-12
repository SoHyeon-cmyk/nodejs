import './personTable.css';//스타일 임포트

//PersonTable컴포넌트 생성
const PersonTable = (props) => {//부모컴포넌트에서 전달한 속성을 props로 받음
  return (
    <table className='PersonTable'>
      <tbody>
        <tr><td>이름</td><td>나이</td></tr>
        {/*props로 전달받은persons을 순회 하면서 person의 name프로퍼티와 age프로퍼티를 td에 텍스트로 넣어줌*/}
        {props.persons.map(person => (
          <tr key={person.id}><td>{person.name}</td><td>{person.age}</td></tr>
        ))}
      </tbody>
    </table>
  )
}

//PersonTable 내보내기
export default PersonTable;