import React from 'react';
import styled, { keyframes } from 'styled-components';

// Golden Jubilee Theme Colors
const goldColor = '#DAA520';
const goldGradient = 'linear-gradient(135deg, #DAA520, #FFD700, #B8860B)';
const darkBg = '#1a1a1a';

// Golden sweep animation
const goldSweep = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.div`
  min-height: 100vh;
  background: ${darkBg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(
    90deg,
    #DAA520 0%,
    #FFD700 25%,
    #FFFF99 50%,
    #FFD700 75%,
    #DAA520 100%
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${goldSweep} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }
`;

const ToBeUpdated = () => {
  return (
    <Container>
      <Title>To be updated soon</Title>
    </Container>
  );
};

export default ToBeUpdated;
