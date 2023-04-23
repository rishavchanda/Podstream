import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Card = styled.div`
background-color: ${({ theme }) => theme.card};
max-width:180px;
height:250px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 20px;
border-radius: 6px;
`

const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
const Title = styled.div`
  display:flex;
  text-overflow: ellipsis " [..]";
  width: 80%;
  color: ${({ theme }) => theme.text_primary};
  
`

const CardImage = styled.img`
  object-fit:cover;
  width: 100%;

`
const CardInformation = styled.div`
  display:flex;
  align-items: flex-end;
  gap:1rem;
  font-weight:450;
  padding: 24px 0px 0px 0px;
  width: 100%;
`
const MainInfo = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  `
const CreatorInfo = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;

  `
  const CreatorName = styled.div`
  font-size:14px;
  text-overflow: ellipsis " [..]";
  width: 80%;
  color: ${({ theme }) => theme.text_secondary};
`
const TimePosted = styled.div`
  padding-top:0.6rem;
  color: ${({ theme }) => theme.text_secondary};
`
const Favorite = styled.div`
  color:white;
  font-size:1.5rem;
  bottom: 6px;
  right: 6px;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95};
`
export const PodcastCard = ({podcast}) => {
  const [favourite, setFavourite] = useState(true)
  return (
    <Card>
      <Top>
        {/* <Favorite>
          {favourite ?
            <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
            :
            <FavoriteIcon></FavoriteIcon>}
        </Favorite> */}
        <CardImage src="https://hips.hearstapps.com/hmg-prod/images/podcast-wtf-marc-maron-1613574602.png?resize=480:*" />
      </Top>
      <CardInformation>
        <MainInfo>
          <Avatar
            src='https://variety.com/wp-content/uploads/2023/02/Marc-Maron.jpg?w=1000' />
          <CreatorInfo>
            <Title>{podcast.name}</Title>
            <CreatorName>
              {podcast.creator}
            </CreatorName>
          </CreatorInfo>
        </MainInfo>
      </CardInformation>
    </Card>
    // <Card>

    //   <CardInformation>
    //     <Avatar
    //       src='https://variety.com/wp-content/uploads/2023/02/Marc-Maron.jpg?w=1000' />
    //     <div>
    //       <Description>
    //         A weekly podcast and radio show hosted by stand-up comedian Marc Maron.
    //       </Description>
    //       <CreatorName>
    //         Marc Maron
    //       </CreatorName>
    //       <TimePosted>
    //         •2hours ago
    //       </TimePosted>
    //     </div>
    //   </CardInformation>
    // </Card>
  );
}