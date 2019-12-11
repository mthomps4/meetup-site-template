import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';

const Container = styled(Flex)`
  margin-top: 0.5rem;
  width: 100%;
`;

const Left = styled(Flex)`
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: 'green';
`;

const Right = styled(Flex)`
  width: 50%;
  justify-content: center;
  align-items: center;
  background: 'blue';
`;

const DualBlock = ({ first, second }) => (
  <Container>
    <Left>{first}</Left>
    <Right>{second}</Right>
  </Container>
);

export default DualBlock;
