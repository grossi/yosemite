import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

const _gray = {
  100: '#F2F5F8',
  200: '#D7E1EA',
  300: '#94AFC7',
  700: '#1D2734',
  800: '#161D27',
  900: '#090C10',
};

const _theme = {
  palette: {
    accent: '#FFB01F',
    white: '#FFFFFF',
    gray: _gray,
    background: _gray[900],
    text: {
      primary: _gray[100],
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  }
};

export type Theme = typeof _theme;

interface ThemeProps {
  children: React.ReactNode;
}

export default function ThemeProvider( props: ThemeProps ) {
  return (
    <MuiThemeProvider theme={_theme}>
      {props.children}
    </MuiThemeProvider>
  );
}
