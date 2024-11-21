import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 0.6rem;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const DefaultCardText = styled.div`
  color: #f2f3f4;
  font-size: 1.4rem;
  font-weight: 600;
`;

const DefaultCardImg = styled.img`
  height: 90px;
  width: 80px;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 66%, 0 98%);
  transform: rotate(20deg);
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const DefaultCard = ({ category }) => {
  const { color, name, img } = category;

  return (
    <Card css={`background-color: ${color}`}>
      <DefaultCardText>{name}</DefaultCardText>
      <FlexContainer>
        <DefaultCardImg src={img} alt="podcast-image" />
      </FlexContainer>
    </Card>
  );
};
