import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
 const  Container=styled.div`

 `
 const ProfileAvatar=styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:20px;
`
const ProfileName=styled.div`
display:flex;
flex-wrap:wrap;
gap:20px;
color: ${({ theme }) => theme.text_primary};
font-size:4rem;
font-weight:1000;
`

const Profile = () => {
    return(
        <div>
        <Container>
            <ProfileAvatar>
     <Avatar sx={{height: 165,width:165}}  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"></Avatar>
            </ProfileAvatar>
            <ProfileName>
            Harry  
            </ProfileName>
        </Container>

        </div>
    );
}

export default Profile;