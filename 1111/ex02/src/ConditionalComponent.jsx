import React from 'react';
//이곳에 작성
const ConditionalComponent = ({isActive}) => {
// props로 속성을 받으면 props.inActive로 작성함
// {isActive}로 받으면 그냥 isActive로 작성하면 됨

const className = isActive ? 'active' : 'inactive' 

  return <div className='className'>Status: </div>;
};
export default ConditionalComponent;