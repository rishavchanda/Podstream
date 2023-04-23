import { Pause, PlayArrow, SkipNextRounded, SkipPreviousRounded, SouthRounded, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'

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
`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
`

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 6px;
`
const PodData = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.span`
    font-size: 14px;
    font-weight: 500;
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

const ProgressBar = styled.div`
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

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }

    const handleTimeUpdate = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgressWidth(progress);
    }

    const handleVolumeChange = (event) => {
        const volume = event.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    return (
        <Container>
            <Left>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png" />
                <PodData>
                    <Title>Podcast title -</Title>
                    <Artist>Artist Name</Artist>
                </PodData>
            </Left>
            <Audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />
            <Player>
                <Controls>
                    <SkipPreviousRounded />
                    {isPlaying ? <IcoButton onClick={togglePlay}><Pause style={{ color: 'inherit' }} /></IcoButton> : <IcoButton onClick={togglePlay}><PlayArrow style={{ color: 'inherit' }} /></IcoButton>}
                    <SkipNextRounded />
                </Controls>
                <ProgTime>
                    <Time>{audioRef.current?.currentTime ? new Date(audioRef.current.currentTime * 1000).toISOString().substr(14, 5) : "00:00"}</Time>
                    <ProgressBar>
                        <Progress width={progressWidth} />
                    </ProgressBar>
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
