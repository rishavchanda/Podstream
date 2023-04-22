import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { getMostPopularPodcast } from '../api';
import { getPodcastByCategory } from '../api';

const DashboardMain = styled.div`
padding: 30px 0px;
`;
const FilterContainer = styled.div`
margin:20px 20px ;
padding: 24px;
box-sizing: border-box;
height: 250px;
background-color: ${({ theme }) => theme.bg};
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
`;
const Podcasts = styled.div`
  
`;

const Dashboard = () => {

  const [mostPopular, setMostPopular] = useState([]);

  useEffect(()=>{
    getMostPopularPodcast()
  .then((res)=>setMostPopular(res))
  .catch((error)=>console.log(error));
  })

  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>Most Popular</Topic>
        <Podcasts>
          {mostPopular.map((podcast)=>{

          })}
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>Most Popular</Topic>
        <Podcasts>
          {mostPopular.map((podcast)=>{
            
          })}
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard