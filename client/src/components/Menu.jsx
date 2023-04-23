import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/userSlice";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  display: flex;
  padding: 60px 0px;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  
`;
const Elements = styled.div`
padding: 4px 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: flex-start;
align-items: center;
gap: 12px;
cursor: pointer;
color:  ${({ theme }) => theme.text_secondary};
width: 100%;
&:hover{
    background-color: ${({ theme }) => theme.text_secondary + 50};
}
`;
const NavText = styled.div`
padding: 12px 0px;
`;
const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary + 50};
margin: 10px 0px;
`;
const Flex = styled.div`
width: 100%;
justify-content: flex-end;
`;
const Close = styled.div`
display: none;
@media (max-width: 1100px) {
  display: block;
}
`;
const Menu = ({ setMenuOpen, darkMode, setDarkMode, setUploadOpen, setSignInOpen }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);
    const logoutUser = () => {
        dispatch(logout());
        navigate(`/`);
    };

    return (
        <MenuContainer setMenuOpen={setMenuOpen}>
            <Flex>
                <Close>
                    <CloseRounded onClick={() => setMenuOpen(false)} style={{cursor: "pointer"}}/>
                </Close>
            </Flex>
            <Link to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <HomeRoundedIcon />
                    <NavText>Dashboard</NavText>
                </Elements>
            </Link>
            <Link to='/search' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <SearchRoundedIcon />
                    <NavText>Search</NavText>
                </Elements>
            </Link>
            {
                currentUser ?
                    <Link to='/favourites' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <FavoriteRoundedIcon />
                            <NavText>Favourites</NavText>
                        </Elements>
                    </Link >
                    :
                    <Link onClick={() =>
                        setSignInOpen(true)
                    } style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <FavoriteRoundedIcon />
                            <NavText>Favourites</NavText>
                        </Elements>
                    </Link >
            }
            <HR />
            <Link onClick={() => {
                if (currentUser) {
                    setUploadOpen(true)
                } else {
                    setSignInOpen(true)
                }
            }} style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <BackupRoundedIcon />
                    <NavText>Upload</NavText>
                </Elements>
            </Link>


            {
                darkMode ?
                    <>
                        <Elements onClick={() => setDarkMode(false)}>
                            <LightModeRoundedIcon />
                            <NavText>Light Mode</NavText>
                        </Elements>
                    </>
                    :
                    <>
                        <Elements onClick={() => setDarkMode(true)}>
                            <DarkModeRoundedIcon />
                            <NavText>Dark Mode</NavText>
                        </Elements>
                    </>
            }
            {
                currentUser ?
                    <Elements onClick={() => logoutUser()}>
                        <ExitToAppRoundedIcon />
                        <NavText>Log Out</NavText>
                    </Elements>

                    :
                    <Elements onClick={() => setSignInOpen(true)}>
                        <ExitToAppRoundedIcon />
                        <NavText>Log In</NavText>
                    </Elements>
            }

        </MenuContainer >
    )
}

export default Menu