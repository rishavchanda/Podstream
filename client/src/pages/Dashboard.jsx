import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMostPopularPodcast } from '../api/index';
import { getPodcastByCategory } from '../api';
import { PodcastCard } from '../components/PodcastCard.jsx'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const DashboardMain = styled.div`
padding: 30px 0px;
`;
const FilterContainer = styled.div`
margin:20px 20px ;
padding: 24px;
box-sizing: border-box;
background-color: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
`;
const Podcasts = styled.div`
--_spacer: var(--size-3);
display: grid;
gap: var(--_spacer);
grid-auto-flow: column;
grid-auto-columns: 21%;

padding: 0 var(--_spacer) var(--_spacer);

overflow-x: auto;
overscroll-behavior-inline: contain;
`;

const Dashboard = () => {

  const [mostPopular, setMostPopular] = useState([]);
  const [comedy, setComedy] = useState([1]);

  useEffect(() => {
    getMostPopularPodcast()
      .then((res) => {
        setMostPopular(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  useEffect(() => {
    getPodcastByCategory("comedy")
      .then((res) => {
        setMostPopular(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>Most Popular</Topic>
          <Podcasts>
            {mostPopular.map((podcast) => (
              <PodcastCard/>
            ))}
          </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>Comedy</Topic>
        {/* <Podcasts>
          {comedy.map((podcast) => (
            <PodcastCard />
          ))}
        </Podcasts> */}
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard