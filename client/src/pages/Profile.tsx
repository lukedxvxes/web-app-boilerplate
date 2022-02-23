import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="page profile-page">
      <Heading>Profile</Heading>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
