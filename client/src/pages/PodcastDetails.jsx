import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CircularProgress, IconButton } from '@mui/material';
import { favoritePodcast, getPodcastById, getUsers } from '../api';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Episodecard from '../components/Episodecard';
import { openSnackbar } from '../redux/snackbarSlice';
import Avatar from '@mui/material/Avatar';
import { format } from 'timeago.js';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Container = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
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
  font-size: 32px;
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

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  `;


const Episodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  display: flex;
  justify-content space-between;
  align-items: center;
`;

const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Favorite = styled(IconButton)`
  color:white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: ${({ theme }) => theme.text_primary} !important;
`

const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
const Creator = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 12px;
`
const CreatorContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const CreatorDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
`
const Views = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 12px;
margin-left: 20px;
`
const Icon = styled.div`
color: white;
font-size: 12px;
margin-left: 20px;
border-radius: 50%;
background: #9000ff !important;
display: flex;
align-items: center;
justify-content: center;
padding: 6px;
`

const PodcastDetails = () => {

  const { id } = useParams();
  const [favourite, setFavourite] = useState(false);
  const [podcast, setPodcast] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();

  const token = localStorage.getItem("podstreamtoken");
  //user
  const { currentUser } = useSelector(state => state.user);

  const favoritpodcast = async () => {
    setLoading(true);
    if (podcast !== undefined && podcast !== null) {
      await favoritePodcast(podcast?._id, token).then((res) => {
        if (res.status === 200) {
          setFavourite(!favourite)
          setLoading(false)
        }
      }
      ).catch((err) => {
        console.log(err)
        setLoading(false)
        dispatch(
          openSnackbar(
            {
              message: err.message,
              severity: "error"
            }
          )
        )
      })
    }
  }

  const getUser = async () => {
    setLoading(true)
    await getUsers(token).then((res) => {
      setUser(res.data)
      setLoading(false)
    }).then((err) => {
      console.log(err)
      setLoading(false)
      dispatch(
        openSnackbar(
          {
            message: err.message,
            severity: "error"
          }
        )
      )
    });
  }

  const getPodcast = async () => {

    setLoading(true)
    await getPodcastById(id).then((res) => {
      if (res.status === 200) {
        setPodcast(res.data)
        setLoading(false)
      }
    }
    ).catch((err) => {
      console.log(err)
      setLoading(false)
      dispatch(
        openSnackbar(
          {
            message: err.message,
            severity: "error"
          }
        )
      )
    })
  }


  useState(() => {
    getPodcast();
  }, [currentUser])

  React.useEffect(() => {
    //favorits is an array of objects in which each object has a podcast id match it to the current podcast id
    if (currentUser) {
      getUser();
    }
    if (user?.favorits?.find((fav) => fav._id === podcast?._id)) {
      setFavourite(true)
    }
  }, [currentUser, podcast])

  return (
    <Container>
      {loading ?
        <Loader>
          <CircularProgress />
        </Loader>
        :
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Favorite onClick={() => favoritpodcast()}>
              {favourite ?
                <FavoriteIcon style={{ color: "#E30022", width: '16px', height: '16px' }}></FavoriteIcon>
                :
                <FavoriteIcon style={{ width: '16px', height: '16px' }}></FavoriteIcon>
              }
            </Favorite>
          </div>
          <Top>
            <Image src={podcast?.thumbnail} />
            <Details>
              <Title>{podcast?.name}
              </Title>
              <Description>{podcast?.desc}</Description>
              <Tags>
                {podcast?.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </Tags>
              <CreatorContainer>
                <CreatorDetails>
                  <Avatar src={podcast?.creator?.img} sx={{ width: "26px", height: "26px" }}>{podcast?.creator?.name.charAt(0).toUpperCase()}</Avatar>
                  <Creator>{podcast?.creator?.name}</Creator>
                </CreatorDetails>
                <Views>• {podcast?.views} Views</Views>
                <Views>
                  • {format(podcast?.createdAt)}
                </Views>
                <Icon>
                  {podcast?.type === "audio" ?
                    <HeadphonesIcon />
                    :
                    <PlayArrowIcon />
                  }
                </Icon>
              </CreatorContainer>
            </Details>
          </Top>
          <Episodes>
            <Topic>All Episodes</Topic>
            <EpisodeWrapper>
              {podcast?.episodes.map((episode, index) => (
                <Episodecard episode={episode} podid={podcast} type={podcast.type} user={user} index={index} />
              ))}
            </EpisodeWrapper>
          </Episodes>
        </>
      }
    </Container >
  )
}

export default PodcastDetails