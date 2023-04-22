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
height: 250px;
background-color: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
`;
const Podcasts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
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

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };

  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>Most Popular</Topic>
        <Podcasts>
          <button className="prev" onClick={() => slide(-50)}>
            <i className="fa fa-angle-left"></i>
          </button>
          //Right Button
          <button className="next" onClick={() => slide(+50)}>
            <i className="fa fa-angle-right"></i>
          </button>
          {mostPopular.map((podcast) => (
            <PodcastCard />
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