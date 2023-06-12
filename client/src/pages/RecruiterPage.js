import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const RecruitePage = () => {
  const { username: userParam } = useParams();
  console.log(userParam)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data)

  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/myportal" />;
  }
  console.log(user)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        Sorry Could not find user with that name.
      </h4>
    );
  }
  
  return (
    <>
    <h1>{user.username}</h1>
    <h1>Hello and Welcome!</h1>
    </>
  )
};

export default RecruitePage;