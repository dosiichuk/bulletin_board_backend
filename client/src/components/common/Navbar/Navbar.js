import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import { BASE_URL } from '../../../config';
import { getLoginStatus, logoutSuccess } from '../../../redux/authRedux';
import { Button } from '../Button/Button';
import styles from './Navbar.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[800],
  },
  logo: {
    textDecoration: 'none',
    color: theme.palette.primary[100],
  },
  appBar: {
    backgroundColor: theme.palette.primary[800],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    color: theme.palette.primary[100],
    backgroundColor: theme.palette.primary[800],
  },
}));

const Component = ({ loginStatus }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLogin = () => {
    window.open(`${BASE_URL}/auth/google`, '_self');
  };
  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.open(`${BASE_URL}/auth/auth.logout`, '_self');
  };

  return (
    <AppBar position='static' className={classes.appBar}>
      <Container maxWidth='lg'>
        <Toolbar className={classes.toolbar}>
          <a href='/' className={classes.logo}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <CardGiftcardIcon />
            </IconButton>
          </a>
          <Typography variant='h6' className={clsx(classes.title, styles.navTitle)}>
            Bulletin Board
          </Typography>
          {!loginStatus && (
            <Button color='inherit' action={handleLogin}>
              Login
            </Button>
          )}

          {loginStatus && (
            <>
              <Button to='/post/myposts'>My Posts</Button>
              <Button action={handleLogout}>Log out</Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Component.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

const ContainerComponent = connect(mapStateToProps)(Component);

export { ContainerComponent as Navbar, Component as NavbarComponent };
