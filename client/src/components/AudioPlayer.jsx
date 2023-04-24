import { Pause, PlayArrow, SkipNextRounded, SkipPreviousRounded, SouthRounded, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setCurrentTime } from '../redux/audioplayerSlice'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    background-color:  ${({ theme }) => theme.card};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px 0px;
    @media (max-width: 768px) {
        height: 60px;
    }
    z-index: 999;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
    @media (max-width: 768px) {
        gap: 10px;
    }
    flex: 0.2;
`

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
    }
`
const PodData = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.span`
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`
const Artist = styled.span`
    font-size: 12px;
    margin-top: 3px;
`
const Player = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0.8;
    align-items: center;
    justify-content: space-between;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const Audio = styled.audio`
    width: 100%;
    height: 50px;
    margin-right: 20px;
`

const ProgTime = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    gap: 18px;
`

const ProgressBar = styled.input`
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #282828;
`

const Progress = styled.div`
    position: absolute;
    width: ${props => props.width}%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
`

const Time = styled.span`
    font-size: 12px;
`

const IcoButton = styled(IconButton)`
    background-color: ${({ theme }) => theme.text_primary} !important;
    color: ${({ theme }) => theme.bg} !important;
    font-size: 30px !important;
    padding: 5px !important;
`;

const Sound = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 50%;
    max-width: 150px;
    justify-content: space-between;
    margin-right: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`

const VolumeBar = styled.input.attrs({
    type: 'range',
    min: 0,
    max: 1,
    step: 0.1,
})`
   
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.text_primary};
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};;
    cursor: pointer;
  }
  `;

const AudioPlayer = ({ episode, podid, currenttime }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const dispatch = useDispatch();


    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        console.log(currenttime)
        audioRef.current.currentTime = currenttime;
    }

    const handleTimeUpdate = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgressWidth(progress);
        setDuration(duration);
        dispatch(
            setCurrentTime({
                currenttime: currentTime
            })
        )
    }

    const handleVolumeChange = (event) => {
        const volume = event.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const moveBy = (e) => {
        const value = e.target.value;
        audioRef.current.currentTime = value;
        setProgressWidth(value);
    }

    const goToPreviousEpisode = () => {
        audioRef.current.currentTime = 0;
        setProgressWidth(0);
    }

    const goToNextEpisode = () => {
        // go to next episode from the podcast list
    }

    useState(() => {
        //play the audio automatically
        // if (!isPlaying) {
        //     //delay the play to avoid the error
        //     setTimeout(() => {
        //         audioRef.current.play();
        //     }, 1000);
        //     setIsPlaying(true);
        // }
        // audioRef.current.currentTime = currenttime;

    }, []);

    return (
        <Container>
            <Left>
                <Image src={podid?.thumbnail} />
                <PodData>
                    <Title>{episode?.name}</Title>
                    <Artist>{episode?.creator.name}</Artist>
                </PodData>
            </Left>
            <Audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                src={episode?.file}
            />
            <Player>
                <Controls>
                    <SkipPreviousRounded onClick={() => goToPreviousEpisode()} />
                    {isPlaying ? <IcoButton onClick={togglePlay}><Pause style={{ color: 'inherit' }} /></IcoButton> : <IcoButton onClick={togglePlay}><PlayArrow style={{ color: 'inherit' }} /></IcoButton>}
                    <SkipNextRounded onClick={() => goToNextEpisode()} />
                </Controls>
                <ProgTime>
                    <Time>{audioRef.current?.currentTime ? new Date(audioRef.current.currentTime * 1000).toISOString().substr(14, 5) : "00:00"}</Time>
                    <ProgressBar type="range" min={0} value={progressWidth} max={duration}
                        onChange={
                            (e) => {
                                moveBy(e)
                            }
                        } />
                    <Time>{
                        audioRef.current?.duration ? new Date(audioRef.current.duration * 1000).toISOString().substr(14, 5) : "00:00"
                    }
                    </Time>
                </ProgTime>
            </Player>
            <Sound>
                <VolumeUp />
                <VolumeBar value={volume} onChange={handleVolumeChange} />
            </Sound>
        </Container>
    )
}

export default AudioPlayer
