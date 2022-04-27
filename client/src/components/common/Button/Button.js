import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    textDecoration: 'none',
    color: theme.palette.primary[100],
    padding: '5px 10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: theme.palette.primary['700'],
      cursor: 'pointer',
    },
  },
}));

const Component = ({ children, to, action }) => {
  const classes = useStyles();
  const chooseElement = to => {
    return (
      <>
        {to ? (
          <Link className={classes.button} onClick={action} to={to}>
            {children}
          </Link>
        ) : (
          <span onClick={action} className={classes.button}>
            {children}
          </span>
        )}
      </>
    );
  };
  return <>{chooseElement(to)}</>;
};

Component.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  action: PropTypes.func,
};

export { Component as Button, Component as ButtonComponent };
