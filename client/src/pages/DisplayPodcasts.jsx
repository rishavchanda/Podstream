import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPodcastByCategory, getMostPopularPodcast } from '../api/index.js';
import styled from 'styled-components';
import { PodcastCard } from '../components/PodcastCard.jsx';

const DisplayMain = styled.div`
display: flex;
padding: 30px 30px;
flex-direction: column;
height: 100%;
overflow-y: scroll;
`
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Podcasts = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 3fr));
height: 100%;
gap: 10px;
padding: 30px 0px;
`
const Container = styled.div`
background-color: ${({ theme }) => theme.bg};
padding: 20px;
border-radius: 6px;
`



const DisplayPodcasts = () => {
    const { type } = useParams();
    const [podcasts, setPodcasts] = useState([]);
    const [string, setString] = useState("");

    const mostPopular = async () => {
        await getMostPopularPodcast()
            .then((res) => setPodcasts(res.data))
            .catch((error) => console.log(error));
    }
    const getCategory = async () => {
        await getPodcastByCategory("podcast")
            .then((res) => {
                setPodcasts(res.data)
                console.log(podcasts);
            })
            .catch((err) =>
                console.log(err));
    }

    useEffect(() => {

        if (type === 'mostpopular') {
            let arr = type.split("");
            arr[0] = arr[0].toUpperCase();
            arr.splice(4, 0, " ");
            setString(arr.join(""));
            console.log(string);
            mostPopular();
        }
        else {
            let arr = type.split("");
            arr[0] = arr[0].toUpperCase();
            setString(arr);
            getCategory();
        }
    }, [])
    return (
        <DisplayMain>
            <Container>
                <Topic>{string}</Topic>
                <Podcasts>
                    {podcasts.map((podcast) => (
                        <PodcastCard podcast={podcast} />
                    ))}
                </Podcasts>
            </Container>
        </DisplayMain>
    )
}

export default DisplayPodcasts