import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMostPopularPodcast } from '../api/index';
import { getPodcastByCategory } from '../api';
import { PodcastCard } from '../components/PodcastCard.jsx'
import { getUsers } from '../api/index';
import { Link } from 'react-router-dom';

const DashboardMain = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`;
const FilterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
${({ box, theme }) => box && `
background-color: ${theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`}
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  &:hover{
    transition: 0.2s ease-in-out;
  }
  `;
const Podcasts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
`;

const Dashboard = () => {
  const [mostPopular, setMostPopular] = useState([]);
  const [user, setUser] = useState();
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [sports, setsports] = useState([]);
  const [crime, setCrime] = useState([]);

  //user
  const { currentUser } = useSelector(state => state.user);

  const token = localStorage.getItem("podstreamtoken");
  const getUser = async () => {
    await getUsers(token).then((res) => {
      setUser(res.data)
    }).then((error) => {
      console.log(error)
    });
  }

  const getPopularPodcast = async () => {
    await getMostPopularPodcast()
      .then((res) => {
        setMostPopular(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const getCommedyPodcasts = async () => {
    getPodcastByCategory("podcast")
      .then((res) => {
        setComedy(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }

  const getHorrorPodcasts = async () => {
    getPodcastByCategory("podcast")
      .then((res) => {
        setHorror(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }

  const getSportsPodcasts = async () => {
    getPodcastByCategory("podcast")
      .then((res) => {
        setsports(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }

  const getCrimePodcasts = async () => {
    getPodcastByCategory("podcast")
      .then((res) => {
        setCrime(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (currentUser) {
      getUser();
    }
    getPopularPodcast();
    getCommedyPodcasts();
    getHorrorPodcasts();
    getCommedyPodcasts();
    getCrimePodcasts();
    getSportsPodcasts();
  }, [currentUser])

  return (
    <DashboardMain>
      {currentUser && user?.podcasts.length > 0 &&
        <FilterContainer box={true}>
          <Topic>Your Uploads
            <Span>Show All</Span>
          </Topic>
          <Podcasts>
            {user?.podcasts.slice(0, 6).map((podcast) => (
              <PodcastCard podcast={podcast} user={user} />
            ))}
          </Podcasts>
        </FilterContainer>
      }
      <FilterContainer>
        <Topic>Most Popular
          <Link to={`/showpodcasts/mostpopular`} style={{textDecoration: "none"}}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          {mostPopular.slice(0, 6).map((podcast) => (
            <PodcastCard podcast={podcast} user={user} />
          ))}
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>Comedy
        <Link to={`/showpodcasts/comedy`} style={{textDecoration: "none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          {comedy.slice(0, 6).map((podcast) => (
            <PodcastCard podcast={podcast} user={user} />
          ))}
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
      <Link to={`/showpodcast/horror`} style={{textDecoration: "none"}}>
        <Topic>Horror
          <Span>Show All</Span>
        </Topic>
        </Link>
        <Podcasts>
          {horror.slice(0, 6).map((podcast) => (
            <PodcastCard podcast={podcast} user={user} />
          ))}
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
      <Link to={`/showpodcast/crime`} style={{textDecoration: "none"}}>
        <Topic>Crime
          <Span>Show All</Span>
        </Topic>
        </Link>
        <Podcasts>
          {crime.slice(0, 6).map((podcast) => (
            <PodcastCard podcast={podcast} user={user} />
          ))}
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
      <Link to={`/showpodcast/sports`} style={{textDecoration: "none"}}>
        <Topic>Sports
          <Span>Show All</Span>
        </Topic>
        </Link>
        <Podcasts>
          {sports.slice(0, 6).map((podcast) => (
            <PodcastCard podcast={podcast} user={user} />
          ))}
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard