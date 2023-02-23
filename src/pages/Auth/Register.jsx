import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Grid , Box } from '@mui/material'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Register(props) {

  const dispatch = useDispatch();
  const [userId,setUserId]=useState("")
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const onUserIdHandler = (event) => {
      setUserId(event.currentTarget.value);
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
  }
  const onNicknameHandler = (event) => {
      setNickname(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
      event.preventDefault();

      if(password !== confirmPassword){
          return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
      }

      let body = {
          userId:userId,
          email: email,
          nickname: nickname,
          password: password,
      }

      //dispatch(registerUser(body))
      .then(response => {
          if(response.payload.success){
              props.history.push('/loginPage')
          } else {
              alert('Error')
          }
      })
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

                <StyledP>AGUS 멤버 되기!</StyledP>
                <div style={{ 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', 
                  width: '100%', 
                  }}>
                  <form style={{ display: 'flex', flexDirection: 'column'}}
                      onSubmit={onSubmitHandler}
                  >
                    <StyledLabel>아이디</StyledLabel>
                    <StyledInput type='text' value={userId} onChange={onUserIdHandler} placeholder='아이디'/>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type='email' value={email} onChange={onEmailHandler} placeholder='amumal@email.com'/>
                    <StyledLabel>Nickname</StyledLabel>
                    <StyledInput type='text' value={nickname} onChange={onNicknameHandler} placeholder='별명'/>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' value={password} onChange={onPasswordHandler} placeholder='최소 6자 이상'/>
                    <StyledLabel>Confirm Password</StyledLabel>
                    <StyledInput type='password' value={confirmPassword} onChange={onConfirmPasswordHandler} placeholder=''/>
                    <br />
                    <button formAction=''>
                        회원가입
                    </button>
                  </form>
              </div>
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

const StyledP = styled.p`

`
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

export default Register;