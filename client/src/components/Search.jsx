import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";
import { TextField } from '@mui/material';

 const Search_whole=styled.div`
 width:25%;
 display:flex;
 border:1px solid grey;
 border-radius:20px;
 cursor:pointer;
 padding:10px 16px;
 justify-content: flex-start;
 align-items: center;
 gap: 6px;
 `;
 export const Search = () => {
  return (
    <div>
    <Search_whole>
        <SearchOutlinedIcon/>
        <input type='text' placeholder='Search Artist/Podcast' style={{"border":"none","outline":"none","width":"100%"}}/>
    </Search_whole>
      </div>
  )
}

