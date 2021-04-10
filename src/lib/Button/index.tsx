import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '../ThemeProvider';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.accent,
    border: 0,
    borderRadius: 3,
    padding: '8px 16px',
    fontWeight: 700,
    textSize: 16,
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.9)',
    },
    '&:active': {
      filter: 'brightness(0.7)',
    }
  },
  dark: {
    color: theme.palette.gray[100],
  },
  light: {
    color: theme.palette.gray[900],
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  variant: 'dark' | 'light';
}

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  return (
    <button className={clsx(classes.root, classes[props.variant])}>
      {props.children}
    </button>
  );
}

export default Button;
