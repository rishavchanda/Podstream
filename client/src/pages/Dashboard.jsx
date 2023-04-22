import React from 'react';
import styled from 'styled-components';

const DashboardMain = styled.div`
padding: 50px 0px;
`;
const FilterContainer = styled.div`
margin:0px 20px ;
padding: 24px;
box-sizing: border-box;

height: 250px;
background-color: ${({ theme }) => theme.bg};
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
`;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>Most Popular</Topic>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard