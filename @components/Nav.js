import { Button, Flex, Link } from '@chakra-ui/core';
import React from 'react';

// https://chakra-ui.com/button
const Nav = () => (
  <Flex bg="gray.500" color="white">
    <Link href="/">
      <Button variantColor="green">Home</Button>
    </Link>

    <Link href="about">
      <Button variantColor="green">About</Button>
    </Link>
  </Flex>
);

export default Nav;

// <Link href="#">
//   <Button variantColor="green" disabled>
//     Disabled Button
//   </Button>
// </Link>;
