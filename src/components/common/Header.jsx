import { React ,useState,useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import SearchBox from './SearchBox';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
  const [loginCookie, ] = useCookies([]);
  const {user_token, nick_name} = loginCookie;
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    console.log(isToggleOpen)
  };

  return (
    <>
    <StyledHeader >
      <Logo to="/">AGUS</Logo>
    
      <StyledUl >
        <StyledLi isToggleOpen={isToggleOpen}>
          <StyledLink to="/">agora</StyledLink>
        </StyledLi>
        <StyledLi isToggleOpen={isToggleOpen}>
          <StyledLink to="/makeit">vote</StyledLink>
        </StyledLi>
        <StyledLi isToggleOpen={isToggleOpen}>
          <StyledLink to="/myMarket">Q&A</StyledLink>
        </StyledLi>
        <ToggleSearchbar>
          <SearchBox isToggleOpen={isToggleOpen}/>
        </ToggleSearchbar>        
        {user_token ? (
          <StyledLi isToggleOpen={isToggleOpen}>
            <StyledLink to="/">{nick_name}님</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi isToggleOpen={isToggleOpen}>
            <StyledLink to="/login">로그인</StyledLink>
          </StyledLi>
        )}
        {user_token ? (
          <StyledLi isToggleOpen={isToggleOpen}>
            <StyledLink to="/logout">로그아웃</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi isToggleOpen={isToggleOpen}>
            <StyledLink to="/register">회원가입</StyledLink>
          </StyledLi>
        )}
      </StyledUl>
      <StyledMenu onClick={handleToggleOpen}><MenuIcon /></StyledMenu>
      </StyledHeader>
    </>
  );
}
const StyledHeader = styled.header`
  width: 100%;
  background-color:#FFE664;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 975px) {
  flex-direction: column;

  align-items: flex-start;

  }
`;
const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 800;
  margin-left: 20px;
`;
const StyledUl = styled.ul`
  justify-content : space-between;
  display: flex;
  width:100%;
  @media screen and (max-width: 975px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
  }
`
const StyledLi = styled.li`
  list-style: none;
  display: block;
  padding: 5px 5px;
  margin: 20px 30px;
  height: 14px;
  font-size: 12px;
  line-height: 9px;
  position: relative;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 975px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
  }
  }
  
`;
const ToggleSearchbar=styled.div`

@media screen and (max-width: 975px) {
  display: ${(props) => (props.isToggleOpen ?  "block" :"none")};
}
@media screen and (max-width: 500px) {
  display:none;
}
`
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  &:hover{
    transform: scale(1.1);
    color: blue;
    font-weight: bold;
  }  
`;
const StyledMenu=styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
    @media screen and (max-width: 975px) {
      display: block;
    }
    `


export default Header;
