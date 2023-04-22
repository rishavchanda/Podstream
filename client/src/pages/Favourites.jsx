import React from 'react';
import styled from 'styled-components';
import {PodcastCard} from '../components/PodcastCard';

const CardWrapper=styled.div`
  
  display:flex;
  flex-wrap:wrap;
  gap:20px;
`
const FavouritesContainer=styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size:2rem;
  font-weight:500;
  margin-bottom:2rem;
`
const Container=styled.div`
  padding:2.5rem;
`
const Favourites = () => {
  return (
    <div>
      <Container>
      <FavouritesContainer>
          Favourites
      </FavouritesContainer>
          <CardWrapper>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
          </CardWrapper>
        </Container>
    </div>
  )
}

export default Favourites