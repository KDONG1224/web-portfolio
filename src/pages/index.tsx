// base
import type { NextPage } from 'next';

// libraries
import styled from 'styled-components';

// layouts

import { MainBanner, MainCard } from 'container';
import { MainLayoutV2 } from 'layouts';

interface HomePageProps {}

const StyledHomePage = styled.div``;

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <MainLayoutV2>
      <StyledHomePage>
        <MainBanner />
        <MainCard />
      </StyledHomePage>
    </MainLayoutV2>
  );
};

export default HomePage;
