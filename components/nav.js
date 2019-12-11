import styled from '@emotion/styled';
import { Button, Flex, Link } from '@theme-ui/components';
import React from 'react';
import ThemeToggle from './themeToggle';

const Container = styled(Flex)`
  width: '100%';
`;

const Nav = () => (
  <Container>
    <Link href="/">
      <Button variant="primary">Primary Button (HOME)</Button>
    </Link>

    <Link href="about">
      <Button variant="secondary">Secondary Button (ABOUT)</Button>
    </Link>

    <Link href="meetups">
      <Button variant="secondary">Secondary Button (Meetups)</Button>
    </Link>
    <ThemeToggle sx={{ marginLeft: 'auto' }} />
  </Container>
);

export default Nav;
