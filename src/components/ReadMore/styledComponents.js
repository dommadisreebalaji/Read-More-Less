// Style your elements here

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppHeading = styled.h1`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 500;
  color: #1e293b;
`

export const AppDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #334155;
`
export const ReactImage = styled.img`
  width: 600px;
  height: 300px;
`
export const ReactDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  color: #334155;
  width: 600px;
`
export const ReactReadMoreDescription = styled.span`
  font-family: Roboto;
  font-weight: 400;
  color: #334155;
`

export const ReadButton = styled.button`
  border: none;
  background-color: #1f81ff;
  color: #ffffff;
  font-family: Roboto;
  padding: 7px;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  font-weight: 400;
  cursor: pointer;
`
