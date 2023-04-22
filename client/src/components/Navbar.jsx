import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const NavbarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 40px;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bg}
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);

`;
const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  width: 100%;
  max-width: 70px;
  padding: 8px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;



const Navbar = ({ setSignInOpen, setSignUpOpen }) => {

  const { currentUser } = useSelector(state => state.user);


  return (
    <NavbarDiv>
      {
        currentUser ? <>
          <Avatar src={currentUser.img}>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
        </>
          :
          <ButtonDiv onClick={() => setSignInOpen(true)}>
            <PersonIcon style={{ fontSize: "18px" }} />
            Login
          </ButtonDiv>
      }
    </NavbarDiv>
  )
}

export default Navbar