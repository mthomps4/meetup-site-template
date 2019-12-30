import { Box, Flex } from '@chakra-ui/core';

const Footer = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      bg="gray.800"
      color="gray.50">
      <Box width="50%">Footer-Left</Box>
      <Box width="50%">Footer-Right</Box>
    </Flex>
  );
};

export default Footer;
