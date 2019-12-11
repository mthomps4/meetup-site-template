import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Nav from '../components/nav';

const Main = styled(Flex)({
  width: '100%',
  justifyContent: 'center',
});

const Container = styled(Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '1200px',
});

const MainBody = styled(Flex)({
  width: '100%',
  flexGrow: 1,
});

export default ({ children }) => (
  <>
    <Meta />
    <Main>
      <Container>
        <Nav />
        <MainBody>{children}</MainBody>
        <Footer />
      </Container>
    </Main>
  </>
);
