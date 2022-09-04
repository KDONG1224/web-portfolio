// base
import type { NextPage } from 'next';

// libraries
import styled from 'styled-components';

// layouts
import { MainLayout } from 'layouts';
import { MainBanner, MainCard } from 'container';

interface HomePageProps {}

const StyledHomePage = styled.div``;

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

export default HomePage;
