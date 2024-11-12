const StyledComponent = () => {
  
  const style = {
    color: 'blue',
    fontSize: '24px'
  }

  return (
    <div>
      <p style={{color: "blue", fontSize:"24px"}}>Styled Text</p>
      <p style={style}>Styled Text</p>
    </div>
  )
}

export default StyledComponent