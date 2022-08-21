// base
import React from 'react';

// layout
import { MainLayout } from 'layouts';
import { MainBanner, MainCard } from 'container';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  padding: 50px 50px 50px 20px;
`;

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <StyledHomePage>
        <MainBanner />
        <MainCard />
      </StyledHomePage>
    </MainLayout>
  );
};

export default HomePage;
