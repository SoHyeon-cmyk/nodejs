import React, { useState, useEffect } from 'react';

const SyncedInputs = () => {
	//입력값이 변경될 때마다 콘솔에 로그를 찍는 코드 구현

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")


  // useEffect(())
  return (
    <div>
	    {/* input1이 변경되면 input2도 변경되도록 작성 */}
      <input
        type="text"
        value={input1}
        placeholder="Input 1"
        onChange={(e) => {
          setInput1(e.target.value)
          setInput2(e.target.value)//setInput2설정함수로 입력된 값을 보내서 input2에 값을 변경
        }}
      />
      {/* input2가 변경되면 input1도 변경되도록 작성 */}
      <input
        type="text"
        value={input2}
        placeholder="Input 2"
      />
    </div>
  );
};

export default SyncedInputs;