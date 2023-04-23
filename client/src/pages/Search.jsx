import React from 'react';
import styled from 'styled-components'
import { Searchbar } from '../components/Searchbar.jsx';
import { DefaultCard } from '../components/DefaultCard.jsx';
import { Category } from '../utils/Data.js';

const SearchMain = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 20px;
`;
const Heading = styled.div`
    width: 100%;
    align-items: flex-start;
    color: ${({ theme }) => theme.text_primary};
    font-size: 22px;
    font-weight: 540;
    margin: 10px 14px;
`;
const BrowseAll = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 14px;
`;
const Categories = styled.div`
    margin: 20px 10px;
`;
const Search = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <SearchMain>
            <Searchbar />
            <Categories>
            <Heading>Browse All</Heading>
                <BrowseAll>
                    {Category.map((category) => (
                        <DefaultCard category={category} />
                    ))}
                </BrowseAll>
            </Categories>
        </SearchMain>
    )
}

export default Search