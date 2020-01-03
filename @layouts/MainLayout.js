import { Flex } from '@chakra-ui/core';
import { Footer, Meta, Nav } from '../@components';

const MAX_WIDTH = { base: '100%', sm: '', md: '', lg: '1200px' };
export default ({ children }) => (
  <>
    <Meta />
    <Flex margin="0 auto" maxW={MAX_WIDTH} w="100%" flexDirection="column">
      <Nav />
      <Flex
        justifyContent="center"
        bg="gray.900"
        color="white"
        minH={{ base: '95vh' }}
        w="100%">
        <Flex bg="gray.700" w="100%">
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  </>
);
