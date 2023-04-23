import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";
import { TextField } from '@mui/material';

 const Search_whole=styled.div`
 width:30%;
 display:flex;
 border: 1px solid ${({ theme }) => theme.text_secondary};
 border-radius:30px;
 cursor:pointer;
 padding:12px 16px;
 justify-content: flex-start;
 align-items: center;
 gap: 6px;
 color: ${({ theme }) => theme.text_secondary};
 `;
 export const Searchbar = () => {
  return (
    <Search_whole>
        <SearchOutlinedIcon sx={{"color":"inherit"}}/>
        <input type='text' placeholder='Search Artist/Podcast' 
        style={{"border":"none","outline":"none","width":"100%","background":"inherit","color":"inherit"}}/>
    </Search_whole>
  )
}

