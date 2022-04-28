import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getLoginStatus } from '../../../redux/authRedux';

import { PostForm } from '../../features/PostForm/PostForm';

import { connect } from 'react-redux';

const Component = ({ loggedIn }) => {
  if (!loggedIn) return <Redirect to='/' />;
  return <PostForm formTitle='Update Post' formType='editPost' />;
};

const mapStateToProps = (state, ownProps) => ({
  loggedIn: getLoginStatus(state),
});

const Container = connect(mapStateToProps)(Component);

Component.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export { Container as PostEdit, Component as PostEditComponent };
