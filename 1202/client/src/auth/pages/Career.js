import React from 'react'
import styled from "@emotion/styled"

import { Title } from '../style/career.styles'
import CareerViewTable from '../component/CareerViewTable'
import LayoutPage from '../component/LayoutPage'



const Career = () => {
  return (
    <LayoutPage>
    <Title>나의 경력을 관리하세요.</Title>
    <p>회사, 직위, 일자를 입력한 후 경력을 추가해보세요!</p>
    <CareerViewTable/>
    </LayoutPage>
  )
}

export default Career