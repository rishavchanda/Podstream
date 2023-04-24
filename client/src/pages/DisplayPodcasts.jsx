import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPodcastByCategory, getMostPopularPodcast } from '../api/index.js';
import styled from 'styled-components';
import { PodcastCard } from '../components/PodcastCard.jsx';
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/snackbarSlice";
import { displayPodcastFailure } from '../redux/userSlice.jsx';

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
display: flex;
flex-wrap: wrap;
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
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);

    const mostPopular = async () => {
        await getMostPopularPodcast()
            .then((res) => setPodcasts(res.data))
            .catch((err) => {
                dispatch(displayPodcastFailure());
                setLoading(false);
                dispatch(
                    openSnackbar({
                        message: err.message,
                        severity: "error",
                    })
                );
            });
    }
    const getCategory = async () => {
        await getPodcastByCategory(type)
            .then((res) => {
                setPodcasts(res.data)
                if (podcasts.length() === 0) {
                    dispatch(displayPodcastFailure());
                    setLoading(false);
                    dispatch(
                        openSnackbar({
                            message: "No podcasts in this category.",
                            severity: "error",
                        })
                    );
                }
            })
            .catch((err) => {
                dispatch(displayPodcastFailure());
                setLoading(false);
                dispatch(
                    openSnackbar({
                        message: err.message,
                        severity: "error",
                    })
                );
            });

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