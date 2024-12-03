import React from 'react'
import { Header, UserText } from '../styles/header.styles'

const HeaderPage = () => {
  return (
    <Header>
      <UserText>홍길동<span>님</span></UserText>
    </Header>
  )
}

export default HeaderPage