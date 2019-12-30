import { Button, Flex, Link } from '@chakra-ui/core';
import React from 'react';

const StyledLink = ({ routeTo, buttonText }) => (
  <Link
    borderBottomColor="red.600"
    borderBottomWidth="2px"
    w={{ base: '100%' }}
    href={routeTo}>
    <Button w={{ base: '100%' }} borderRadius="0" variantColor="red">
      {buttonText}
    </Button>
  </Link>
);

// https://chakra-ui.com/button
const Nav = () => (
  <Flex
    flexDirection={{ base: 'column', md: 'row' }}
    borderBottomColor="gray.50"
    borderBottomWidth="2px"
    bg="gray.700"
    color="white">
    <StyledLink routeTo="/" buttonText="Home" />
    <StyledLink routeTo="/about" buttonText="About" />
  </Flex>
);

export default Nav;

// Is Loading / Disabled example
// <Link href="#">
//   <Button variantColor="green"
//     isLoading={isLoading}
//     loadingText="Submitting"
//     disabled={isDisabled} >
//     Disabled Button
//   </Button>
// </Link>;
