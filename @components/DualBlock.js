import { Flex } from '@chakra-ui/core';

const DualBlock = ({ first, second }) => (
  <Flex w="100%">
    <Flex w="50%" justifyContent="center" alignItems="center">
      {first}
    </Flex>
    <Flex w="50%" justifyContent="center" alignItems="center">
      {second}
    </Flex>
  </Flex>
);

export default DualBlock;
