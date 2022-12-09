import React from "react";
import { LoginForm, LoginInput } from "../utils/styled";



const Login=()=>{
    return (
        <LoginForm>
           <label htmlFor="ID" style={{ display: "block"}}>ID </label>
            <LoginInput type="text" id="ID"/>
            <label htmlFor="Password" style={{ display: "block"}}>Password </label>
            <LoginInput type="password" id="Password"/>
            <label htmlFor="Confirm Password" style={{ display: "block"}}>Confirm Password
                    </label>
            <LoginInput type="password" id="Confirm Password"/>
        </LoginForm>
    )
}

export default Login;