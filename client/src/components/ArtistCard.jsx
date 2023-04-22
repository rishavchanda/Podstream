import * as React from 'react';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

 const Artist=styled.div `
 display:flex;
 justify-content:center;
 `;
 const Artist_name=styled.div`
   text-align:center;
 `;
const ArtistCard = () => {
  return (
    
    <div style={{margin: '0%'}}>
    <Card sx={{ maxWidth: 200 }} className='card1'>
    <Artist>
     <Avatar sx={{height: 165,width:165}} src='https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3'> </Avatar>
     </Artist>
     <Artist_name>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         Arijit Singh
        </Typography>
      </CardContent>
      </Artist_name>
    </Card>

    </div>
   
  );
}

export default ArtistCard;