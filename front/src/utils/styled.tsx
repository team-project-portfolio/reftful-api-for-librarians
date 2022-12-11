import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
background-color: #E3F0FF;
`;

export const Liink = styled(Link)`
  text-decoration: none;
`
export const textInput = styled.input`
   background-color: #F2FAFF; 
    border: 0;
    border-radius: 12px;
    outline: 1.5px solid #B2AFCA;
    padding: 13px;
    font-size: 30px;
    &:focus{
      background-color: #C0F8FF;
    outline: none;
    }
`
export const LoginBox = styled.div`
  margin: 100px;
  position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 700px;
    border: solid 1.4px #B2AFCA;
    border-radius: 45px;
`

export const TabBox = styled.div`
 display: flex;
    justify-content: center ;
    border-bottom: 1.5px solid #E1E2E4;
    width: 500px;
    margin-bottom: 20px;
    padding: 0px;
  `
export const ContentBox = styled.div`

  padding-bottom: 220px;
  `

export const Tab = styled.div<{ active: boolean }>`
display: flex;
justify-content: center;
cursor: pointer;
    font-size:20px;
    line-height: 10px;
    width: 50%;
    padding: 10px;
   
    ${props => props.active && css`
      color: #524FA1;
      font-weight: bold;
      box-shadow: inset 0px -3px 0px #524FA1;
    `}
  `
export const LoginInput = styled.input`
  height: 22px;
    width: 320px;
    background-color: #F2FAFF;
    border: 1px solid #C9CACC;
    border-radius: 8px;
    outline: 1.5px solid #B2AFCA;
    padding: 13px;
    font-size: 22px;
     &:focus{
      background-color: #C8D0E6;
    outline: none;
     }
`

export const LoginForm = styled.form`
width: 100%;
height: 300px;
display:flex;
position: relative;
flex-direction:column;
  &>label{
    font-size: 20px;
    margin-top: 11px;
    margin-bottom: 5px;
  }
  &>Button{
    margin-top: 40px;
  }
`

export const ErrorWord=styled.small`
color: #D83167;
font-weight: bold;

`