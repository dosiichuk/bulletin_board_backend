import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getLoginStatus } from '../../../redux/authRedux';
import { PostForm } from '../../features/PostForm/PostForm';

const Component = () => {
  const loggedIn = useSelector(getLoginStatus);
  if (!loggedIn) return <Redirect to='/' />;
  return <PostForm formTitle='Publish ad' formType='createPost' />;
};

export { Component as PostAdd, Component as PostAddComponent };
