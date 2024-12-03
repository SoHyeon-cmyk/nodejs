import React from 'react'
import HeaderPage from './Header'
import { Wrapper } from '../style/layout.style'
import { Main } from '../style/layout.style'
import { MainWrapper } from '../style/layout.style'
import FooterPage from './FooterPage'
import SidebarPage from './SidebarPage'


//children은 자식컴포넌트를 뜻함
const LayoutPage = ({children}) => {
  return (
    <Wrapper>
      <SidebarPage/>
      <MainWrapper>
    <HeaderPage/>
    <Main>
    {children}
    </Main>
    <FooterPage/>
    </MainWrapper>
    </Wrapper>
  )
}

export default LayoutPage