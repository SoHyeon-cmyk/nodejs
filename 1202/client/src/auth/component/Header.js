import React from 'react'
import { UserText } from '../style/header.style'
import { Header } from '../style/header.style'

const HeaderPage = () => {
  return (
    <Header>
      <UserText>고양이<span>님</span></UserText>
    </Header>
  )
}

export default HeaderPage