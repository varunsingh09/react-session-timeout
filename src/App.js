import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  makeStyles
} from '@material-ui/core';
import logo from './logo.svg'
import SessionTimeout from './SessionTimeout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
}));

const LoginButton = (props) => {
  return (
    <Button
      color="secondary"
      data-testid="submit"
      fullWidth
      size="large"
      onClick={props.onClick}
      variant="contained"
    >
      Log In
    </Button>
  );
}

const LogoutButton = (props) => {

  return (
    <Button
      color="secondary"
      fullWidth
      size="large"
      onClick={props.onClick}
      variant="contained"
    >
      Logout
    </Button>
  );
}


const App = () => {
  const classes = useStyles();
  const [isAuthenticated, setAuth] = useState(true);
  let button;

  const handleClick = () => {
    setAuth(!isAuthenticated);
  }

  if (isAuthenticated) {
    button = <LogoutButton onClick={handleClick} />;
  } else {
    button = <LoginButton onClick={handleClick} />;
  }

  return (
    <div className={classes.root}>

      <SessionTimeout
        isAuthenticated={isAuthenticated}
        logOut={handleClick} />

    </div>
  );
}

export default App;
