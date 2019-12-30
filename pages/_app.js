import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import App from 'next/app';
import React from 'react';
import theme from '../theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
