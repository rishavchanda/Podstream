import * as React from 'react';
import styled from "styled-components";
import {format} from 'timeago.js';

const SearchedCard = styled.div`
width: 500px;
display: flex;
flex-direction: column;
padding: 18px 18px 30px 18px;
border-radius: 6px;
gap: 12px;
background-color: ${({ theme }) => theme.card};
box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
cursor: pointer;
&:hover{
  cursor: pointer;
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.3);
}
`
const PodcastImage = styled.img`
object-fit:cover;
  width: 50%;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.3);
`
const PodcastTitle = styled.div`
color: ${({ theme }) => theme.text_primary};
display: -webkit-box;
  font-size: 24px;
  font-weight: 520;

`
const UploadInfo = styled.div`
display: flex;
width: 80%;
gap: 30px;

`
const Time = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
`
const CreatorName = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 14px;
`
const Description = styled.div`
color: ${({ theme }) => theme.text_secondary};
display: -webkit-box;
max-width: 100%;
font-size: 14px;
-webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ArtistCard = ({podcast}) => {
  console.log(podcast)
  return (
    <SearchedCard>
      <PodcastImage src={podcast?.thumbnail}/>
      <PodcastTitle>{podcast?.name}</PodcastTitle>
      <UploadInfo>
        <Time>
          {format(podcast?.createdAt)}
        </Time>
        <CreatorName>{podcast?.creator.name}</CreatorName>
      </UploadInfo>
      <Description>{podcast?.desc}</Description>
    </SearchedCard>
   
  );
}

export default ArtistCard;