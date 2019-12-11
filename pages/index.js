import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';
import Main from '../layouts/main';

const Container = styled(Flex)({
  width: '100%',
  maxWidth: '1200px',
});

const Left = styled(Flex)({
  width: '50%',
  backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
});

const Right = styled(Flex)({
  width: '50%',
  background: 'blue',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home = () => (
  <Main>
    <Flex
      sx={{
        width: '100%',
        maxWidth: '1200px',
      }}>
      <Left>
        <p>LOGO</p>
      </Left>

      <Right>
        <p>Next Meetup Details</p>
      </Right>
    </Flex>
  </Main>
);

export default Home;
