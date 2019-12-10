import styled from '@emotion/styled';
import { Box, Flex } from '@theme-ui/components';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Nav from '../components/nav';

const MainBody = styled(Box)({
  width: '100%',
  flex: '1 1 auto',
  minHeight: '500px',
});

const Container = styled(Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
});

export default ({ children }) => (
  <>
    <Meta />
    <Container>
      <Nav />
      <MainBody>{children}</MainBody>
      <Footer />
    </Container>
  </>
);
