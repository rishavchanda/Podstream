import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
 const  Container=styled.div`
gap:100px;
display:flex;
  flex-wrap:wrap;
 `
 const ProfileAvatar=styled.div`
  display:flex;
  flex-wrap:wrap;
  padding-left:3rem;
`
const Container_Profile=styled.div`
`
const ProfileName=styled.div`
gap:100px;
color: ${({ theme }) => theme.text_primary};
font-size:3rem;
font-weight:700;
`
const Profile_email=styled.div`
color:#2b6fc2;

font-size:1.2rem;
font-weight:bold;
`

const Profile = () => {
    return(
        <div>
        <Container>
            <ProfileAvatar>
     <Avatar sx={{height: 165,width:165}}  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"></Avatar>
            </ProfileAvatar>
            <Container_Profile>
            <ProfileName>
            Harry 
            </ProfileName>
            <Profile_email>
            Email:harrykenvic@gmail.com
            </Profile_email>
            </Container_Profile>
           
        </Container>
       

        </div>
    );
}

export default Profile;