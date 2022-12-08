import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
background-color: #E3F0FF;
`;

const Liink=styled(Link)`
  text-decoration: none;
`
const textInput=styled.input`
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

export {Header, Liink, textInput};