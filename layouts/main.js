import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Nav from '../components/nav';

const Container = styled(Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
});

const MainBody = styled(Flex)({
  width: '100%',
  flexGrow: 1,
  maxWidth: '1200px',
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
