import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PodcastCard } from '../components/PodcastCard';
import { getUsers } from '../api/index';

const Container = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavouritesContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
`

const Favourites = () => {
  const [user, setUser] = useState();
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

  useEffect(() => {
    if (currentUser) {
      getUser();
    }
  }, [currentUser]);

  return (
    <Container>
      <Topic>
        Favourites
      </Topic>
      <FavouritesContainer>
        {user && user?.favorits.map((podcast) => (
          <PodcastCard podcast={podcast} user={user}/>
        ))}
      </FavouritesContainer>
    </Container>
  )
}

export default Favourites