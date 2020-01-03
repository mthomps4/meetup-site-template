import { Flex } from '@chakra-ui/core';

const DualBlock = ({ first, second }) => (
  <Flex flexDirection={{ base: 'column', md: 'row' }} w="100%">
    <Flex
      w={{ base: '100%', md: '50%' }}
      h={{ base: 'auto' }}
      justifyContent={{ base: 'flex-start', md: 'center' }}
      alignItems={{ base: 'flex-start', md: 'center' }}>
      {first}
    </Flex>
    <Flex
      w={{ base: '100%', md: '50%' }}
      h={{ base: 'auto' }}
      justifyContent={{ base: 'flex-start', md: 'center' }}
      alignItems={{ base: 'flex-start', md: 'center' }}>
      {second}
    </Flex>
  </Flex>
);

export default DualBlock;
