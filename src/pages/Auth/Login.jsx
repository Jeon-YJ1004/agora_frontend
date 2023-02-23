import React,{useEffect,useState} from 'react'
import {Grid , Box } from '@mui/material'
import { useDispatch } from 'react-redux';

import styled from "styled-components";
import { Link } from 'react-router-dom';

function Login() {
  const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        
        let body = {
            email: Email,
            password: Password,
        }

        //dispatch(loginUser(body));
    }
    const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }
  return (
    <Grid container sx={{width : '100vw', height: '100vh'}}>
        <Grid item xs={0} md={4} sx={{bgcolor : '#FFE664'}}>
        </Grid>
        <Grid item xs={1} md={2}>
        </Grid>
        <Grid item xs={10} md={4} display='flex' sx={{alignItems: 'center'}}>
            <Box sx={{width: '100%', textAlign: 'center'}}>
            <Logo to="/">AGUS</Logo>
                <StyledP>AGUS와 심도 있는 대화를 하려면 로그인 해주세요.</StyledP>
                <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%',
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <StyledLabel>Email</StyledLabel>
                <StyledInput type='email' value={Email} onChange={onEmailHandler}/>
                <StyledLabel>Password</StyledLabel>
                <StyledInput type='password' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button formAction=''>
                    Login
                </button>
            </form>
        </div>
                <hr></hr>
                <StyledP>아직 회원이 아니신가요?</StyledP>
                <Link to="/register">회원가입</Link>
            </Box>
        </Grid>
        <Grid item xs={1} md={2}>

        </Grid>
    </Grid>
  )
}
const Logo = styled(Link)`
  font-size: 30px;
    font-weight: 800;

`;
const StyledLabel=styled.label`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`
const StyledInput=styled.input`
  display: block;
  width: 100%;
  height: 31px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;`

const StyledP = styled.p`

`

export default Login