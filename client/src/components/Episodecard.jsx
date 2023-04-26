import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { closePlayer, openPlayer } from '../redux/audioplayerSlice';
import { addView } from '../api';
import { openSnackbar } from '../redux/snackbarSlice';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding: 20px 30px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    &:hover{
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }
    @media (max-width: 768px){
        flex-direction: column; 
        align-items: flex-start;
      }
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.text_secondary};  
    object-fit: cover;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Description = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`;
const ImageContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
`;


const Episodecard = ({ episode, podid, user, type, index }) => {
    const dispatch = useDispatch();

    const addviewtToPodcast = async () => {
        await addView(podid._id).catch((err) => {
            dispatch(
                openSnackbar({
                    message: err.message,
                    type: "error",
                })
            );
        });

    }

    return (
        <Card onClick={async () => {
            await addviewtToPodcast();
            if (type === "audio") {
                //open audio player
                dispatch(
                    openPlayer({
                        type: "audio",
                        episode: episode,
                        podid: podid,
                        index: index,
                        currenttime: 0
                    })
                )
            } else {
                //open video player
                dispatch(
                    dispatch(
                        openPlayer({
                            type: "video",
                            episode: episode,
                            podid: podid,
                            index: index,
                            currenttime: 0
                        })
                    )
                )
            }
        }}>
            <ImageContainer>
                <Image src={podid?.thumbnail} />
                <PlayCircleOutlineIcon style={{position:"absolute",top:"26px",left:"26px",color:"white",width:"50px",height:"50px"}}/>
            </ImageContainer>
            <Details>
                <Title>{episode.name}</Title>
                <Description>{episode.desc}</Description>
            </Details>
        </Card>
    )
}

export default Episodecard