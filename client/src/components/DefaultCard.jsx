import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width:200px;
height:200px;
background-color:#4B7F12;
border-radius:0.6rem;
padding:1rem;
`
const DefaultCardText = styled.div`
color:white;
font-size:1.4rem;
font-weight:600;
`
const DefaultCardImg=styled.img`
height:100px;
width:100px;
margin-left:6.5rem;
margin-top:6rem;
clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
transform:rotate(20deg);
`
export const DefaultCard = () => {
  return (
    <Card>
        <DefaultCardText>
            Podcasts
        </DefaultCardText>

        <DefaultCardImg
            src="https://imgs.search.brave.com/d0WynnhpkxgzTEUxhBqoA47nZYNAPUI9I0s2emLOUKI/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/NzE2MWIyNzllNmRl/MmY1OGVjOGRkMzJi/YWE1ZTQ5OGNkMmI3/Njk0OQ"
            alt="podcast-image"
        />
    </Card>
  )
}
