import React from 'react';

const MyComponent = ({name,age }) => {
  return (
    <div>
        새로운 컴포넌트에 {name} 입니다. <br />
		나이는 {age}
    </div>
  );
};

export default MyComponent;