import React from 'react'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components'
const Card=styled.div`
    height:200px;
    width:200px;
    background-color:black;
`
export const SearchCard = () => {
  return (
    <Card>
        <Avatar
          src='https://imgs.search.brave.com/ehz2Uo5e7s5vqThA4x8MHLLd-td3CpvouiLDGFQnVJg/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE5/NzA4ODg4My11emcz/YWEtdDUwMHg1MDAu/anBn'
          alt='eminem picture'
          /> 
    </Card>
  )
}
