import React from 'react'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
const Card=styled.div`
    height:250px;
    width:250px;
    background-color:#305506;
    padding:1rem;
    border-radius:0.6rem;
`
const PodcastName=styled.div`
    color: ${({ theme }) => theme.text_primary};
    margin:1.6rem;
    font-weight:600;
    font-size:1.5rem;
    `
const PodcastDescription=styled.div`
    color: ${({theme}) => theme.text_secondary};
    margin:1.4rem;

`
export const SearchCard = () => {
  return (
    <Card>
        <Avatar
          src='https://imgs.search.brave.com/ehz2Uo5e7s5vqThA4x8MHLLd-td3CpvouiLDGFQnVJg/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE5/NzA4ODg4My11emcz/YWEtdDUwMHg1MDAu/anBn'
          alt='eminem picture'
          sx={{width:"100px",height:"100px"}}
          /> 
          <PodcastName>
            Eminem
          </PodcastName>
          <PodcastDescription>
            Hello I am Eminem
          </PodcastDescription>
    </Card>
  )
}
