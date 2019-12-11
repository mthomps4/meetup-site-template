import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';

const Container = styled(Flex)({
  marginTop: '.5rem',
  width: '100%',
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

const DualBlock = ({ first, second }) => (
  <Container>
    <Left>{first}</Left>
    <Right>{second}</Right>
  </Container>
);

export default DualBlock;
