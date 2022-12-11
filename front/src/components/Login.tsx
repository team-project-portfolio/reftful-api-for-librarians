import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { ErrorWord, LoginForm, LoginInput } from "../utils/styled";
import Button from '@mui/material/Button';
import { SingUpData } from "../interface/interface";
import axios from "axios";

const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onChange' });
    return (
        <LoginForm>
            <label htmlFor="ID" style={{ display: "block" }}>ID </label>
            <LoginInput type="text" id="ID"  {...register("name", {
                required: "ID를 입력해 주세요",
                minLength: {
                    value: 3,
                    message: "3글자 이상으로 입력해 주세요",
                },
                maxLength: {
                    value: 10,
                    message: "10글자 이하로 입력해 주세요",
                },
            })} />
            {errors.name && <ErrorWord>{`${errors.name?.message}`}</ErrorWord>}
            <label htmlFor="Password" style={{ display: "block" }}>Password </label>
            <LoginInput type="password" id="Password" {...register("password", {
                required: "Password를 입력해 주세요",
                minLength: {
                    value: 6,
                    message: "6글자 이상으로 입력해 주세요",
                },

            })} />
            {errors.password && <ErrorWord>{`${errors.password?.message}`}</ErrorWord>}
            <Button variant="contained" type="submit" >로그인</Button>
        </LoginForm>
    )
}

export default Login;