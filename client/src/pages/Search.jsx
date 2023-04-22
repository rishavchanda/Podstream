import React from 'react';
import {PodcastCard} from '../components/PodcastCard';
import {DefaultCard} from '../components/DefaultCard';
import {SearchCard} from '../components/SearchCard';

const Search = () => {
  return (
    <div>
      <PodcastCard/>
      <DefaultCard/>
      <SearchCard/>
    </div>
  )
}

export default Search