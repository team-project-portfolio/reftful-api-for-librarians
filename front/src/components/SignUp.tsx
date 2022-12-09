import React from "react";
import { LoginForm, LoginInput } from "../utils/styled";

const SignUp=()=>{
    return (
        <LoginForm>
           <label htmlFor="ID" style={{ display: "block"}}>ID </label>
            <LoginInput type="text" id="ID"/>
            <label htmlFor="Password" style={{ display: "block"}}>Password </label>
            <LoginInput type="password" id="Password"/>
        </LoginForm>
    )
}

export default SignUp;