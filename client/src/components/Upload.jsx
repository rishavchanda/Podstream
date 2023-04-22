import { Modal } from '@mui/material';
import React from 'react'
import Styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 380px;
border-radius: 16px;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 10px;
display: flex;
flex-direction: column;
position: relative;
`;


const Title = styled.div`
font-size: 22px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};
margin: 16px 28px;
`;
const OutlinedBox = styled.div`
height: 44px;
border-radius: 12px;
border: 1px solid ${({ theme }) => theme.text_secondary};
color: ${({ theme }) => theme.text_secondary};
${({ googleButton, theme }) =>
        googleButton &&
        `
  user-select: none; 
gap: 16px;`}
${({ button, theme }) =>
        button &&
        `
  user-select: none; 
border: none;
  background: ${theme.button};
  color:'${theme.bg}';`}
  ${({ activeButton, theme }) =>
        activeButton &&
        `
  user-select: none; 
border: none;
  background: ${theme.primary};
  color: white;`}
margin: 3px 20px;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
padding: 0px 14px;
`;

const Upload = () => {
    return (
        <Modal open={true} onClose={() => setSignInOpen(false)}>
            <Container>
            <Wrapper>
              <CloseRounded
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "30px",
                  cursor: "pointer",
                }}
                onClick={() => setSignInOpen(false)}
              />
              </Wrapper>
            </Container>
        </Modal>
    )
}

export default Upload