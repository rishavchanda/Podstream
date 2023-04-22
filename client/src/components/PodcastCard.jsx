import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
const Description = styled.div`
  font-size:1.2em;
  display:flex;
  padding-bottom:0.6rem;
`
const CreatorName = styled.div`
  font-size:1rem;
`
const CardImage = styled.img`
  height:200px;
  width:100%;
  object-fit:cover;
`
const CardInformation = styled.div`
  display:flex;
  gap:1rem;
  font-weight:450;
  padding:12px 12px;
`
const TimePosted = styled.div`
  padding-top:0.6rem;
`
export const PodcastCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardImage
        src="https://hips.hearstapps.com/hmg-prod/images/podcast-wtf-marc-maron-1613574602.png?resize=480:*"
        alt="green iguana" />
      <CardInformation>
        <Avatar
          src='https://variety.com/wp-content/uploads/2023/02/Marc-Maron.jpg?w=1000' />
        <div>
          <Description>
            A weekly podcast and radio show hosted by stand-up comedian Marc Maron.
          </Description>
          <CreatorName>
            Marc Maron
          </CreatorName>
          <TimePosted>
            •2hours ago
          </TimePosted>
        </div>

      </CardInformation>

    </Card>
  );
}