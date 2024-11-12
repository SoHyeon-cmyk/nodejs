//컴포넌트 생성
const MultiplicaitionTable = () =>{
  //구구단 데이터 생성
const generateTableData = () =>{
  const data = []; //구구단을 담을 배열
  for (let i=1; i<=9; i++){
    const row = [];//구구단의 숫자값을 담을 배열
    for (let j=1; j<=9; j++){
      row.push(i*j);//1단부터 9단 까지 곱하는 값을 row배열에 넣어줌
    }
    data.push(row);
  }
  return data//함수를 호출한 곳에 리턴으로 data 반환
}

// generateTableData함수를 호출하여 구구단 데이터를 tableData에 할당
const tableData = generateTableData();
  //리턴으로 버츄얼 DOM을 렌더링
  return (
    <table cellPadding={5} cellSpacing="0"> 
  <thead>
    <tr>

        {/* 배열 요소가 9개인 빈배열을 사용하여 1부터 9까지 숫자를 th태그로 넣어줌 */}
        {Array.from({length:9}, (_, index) => (
          <th key ={index + 1}>{index + 1}</th>
        ))}
    </tr>
  </thead>
        <tbody>
          {tableData.map((row,rowIndex) => (
            <tr 
            key={rowIndex + 1}
            // rowIndex가 짝수면 whiteBg클래스 적용, 홀수는 grayBg적용
            className={rowIndex % 2 === 0 ? 'whiteBg' : 'grayBg'}
            >
              <td>{rowIndex+1}</td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
    </table>
  )
}

//내보내기
export default MultiplicaitionTable