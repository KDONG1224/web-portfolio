// base
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

// layout
import { MainLayout } from 'layouts';
import { MainBanner, MainCard } from 'container';
import styled from 'styled-components';

interface HomePageProps {}

const StyledHomePage = styled.div`
  padding: 50px 50px 50px 20px;
`;

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <MainLayout>
      <StyledHomePage>
        <MainBanner />
        <MainCard />
      </StyledHomePage>
    </MainLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {

export default HomePage;
