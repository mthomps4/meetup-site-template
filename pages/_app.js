import { Global } from '@emotion/core';
import App from 'next/app';
import React from 'react';
import { ColorMode, ThemeProvider } from 'theme-ui';
import theme from '../theme';
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={_theme => ({
            body: {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            },
          })}
        />
        <ColorMode />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
