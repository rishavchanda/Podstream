import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { favoritePodcast } from '../api';
import { useSelector } from 'react-redux';

const Card = styled.div`
background-color: ${({ theme }) => theme.card};
height:250px;
max-width: 220px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 16px;
border-radius: 6px;  
box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
&:hover{
  cursor: pointer;
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.3);
}
`

const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
position: relative;
`
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`

const CardImage = styled.img`
  object-fit:cover;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  &:hover{
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`
const CardInformation = styled.div`
  display:flex;
  align-items: flex-end;
  font-weight:450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
  justify-content: flex-start;
  gap: 4px;
  `
const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 6px;

  `
const CreatorName = styled.div`
  font-size:12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: ${({ theme }) => theme.text_secondary};
`
const TimePosted = styled.div`
  padding-top:0.6rem;
  color: ${({ theme }) => theme.text_secondary};
`
const Favorite = styled(IconButton)`
  color:white;
  bottom: 6px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: ${({ theme }) => theme.text_primary} !important;
  position: absolute !important;
`
export const PodcastCard = ({ podcast,user }) => {
  const [favourite, setFavourite] = useState(false)
  
  const token = localStorage.getItem("podstreamtoken");

  const favoritpodcast = async () => {
    console.log(podcast._id.toString(),token)
    await favoritePodcast(podcast._id,token).then((res) => {
      if (res.status === 200) {
        setFavourite(!favourite)
      }
    }
    ).catch((err) => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    //favorits is an array of objects in which each object has a podcast id match it to the current podcast id
    if (user?.favorits?.find((fav) => fav._id === podcast._id)) {
      setFavourite(true)
    }
  }, [user])

  return (
    <Card>
      <Top>
        <Favorite onClick={() => favoritpodcast()}>
          {favourite ?
            <FavoriteIcon style={{ color: "#E30022",width: '16px', height: '16px'}}></FavoriteIcon>
            :
            <FavoriteIcon style={{width: '16px', height: '16px'}}></FavoriteIcon>
            }
        </Favorite>
        <CardImage src={podcast.thumbnail} />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>{podcast.name}</Title>
          <Description>{podcast.desc}</Description>
          <CreatorInfo>
            <Avatar
              src={podcast.creator.img} style={{ width: '26px', height: '26px' }}>{podcast.creator.name?.charAt(0).toUpperCase()}</Avatar>
            <CreatorName>
              {podcast.creator.name}
            </CreatorName>
          </CreatorInfo>
        </MainInfo>
      </CardInformation>
    </Card>
  );
}