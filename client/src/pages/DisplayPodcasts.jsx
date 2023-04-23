import React from 'react'
import {useParams} from 'react-router-dom';

const DisplayPodcasts = () => {
    const {type} = useParams();
  return (
    <div>{type}</div>
  )
}

export default DisplayPodcasts