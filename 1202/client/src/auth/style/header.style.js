import styled from "@emotion/styled"

export const Header = styled.header`
  hegiht:90px;
  position:sticky;
  top:0px;
  display:flex;
  align;items:center;
  padding:0 20px;
  background-color:rgba(255,255,255,0.8);
  justify-content:space-between;
`

export const UserText = styled.p`
  font-size:1.7rem;
  font-weight:bold;
  color:#06b7db;
  &> span{
  color:#18181b;
  font-size:0.8rem
  }
`