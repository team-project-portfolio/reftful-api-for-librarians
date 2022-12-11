import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { ErrorWord, LoginForm, LoginInput } from "../utils/styled";
import Button from '@mui/material/Button';
import { SingUpData } from "../interface/interface";
import axios from "axios";


const SignUp = ({setValue}:{setValue:React.Dispatch<React.SetStateAction<number>>}) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({mode: 'onChange'});

    const onValid = async (data: SingUpData) => {
      
      if(data.password!==data.passwordCheck){
        setError("passwordCheck",{message: "비밀번호가 일치하지 않습니다"});
      }else{
       try{
        
        await axios.post('http://localhost:8000/api/librarians',data);}
        
        catch(err){
            alert(data);
        }
        alert('회원가입이 완료되었습니다');
        setValue(0);
      }
    };

    const onInvalid = (errors: FieldErrors) => {
        console.log("실패");
        console.log(errors);
    };

    return (
        <LoginForm onSubmit={handleSubmit(onValid, onInvalid)}>
            <label htmlFor="ID" style={{ display: "block" } }>ID </label>
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
            <label htmlFor="Email" style={{ display: "block" }}>Email </label>
            <LoginInput type="text" id="Email" {...register("email", {
                required: "Email을 입력해 주세요",
                pattern: {
                    value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email형식에 맞춰서 입력해 주세요"
                },
            })}
            />
            {errors.email && <ErrorWord>{`${errors.email?.message}`}</ErrorWord>}
            <label htmlFor="Password" style={{ display: "block" }}>Password </label>
            <LoginInput type="password" id="Password" {...register("password", {
                required: "Password를 입력해 주세요",
                minLength: {
                    value: 6,
                    message: "6글자 이상으로 입력해 주세요",
                },
    
            })} />
            {errors.password && <ErrorWord>{`${errors.password?.message}`}</ErrorWord>}
            <label htmlFor="passwordCheck" style={{ display: "block" }}>Confirm Password</label>
            <LoginInput type="password" id="passwordCheck" {...register("passwordCheck", {
                required: "Password를 입력해 주세요",
                minLength: {
                    value: 6,
                    message: "6글자 이상으로 입력해 주세요",
                },
    
            })} />
            {errors.passwordCheck && <ErrorWord>{`${errors.passwordCheck?.message}`}</ErrorWord>}
            <Button variant="contained" type="submit" >회원가입</Button>

        </LoginForm>

    )
}

export default SignUp;