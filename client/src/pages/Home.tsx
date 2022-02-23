import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className="page home-page">
      <section>
        <Heading>Home</Heading>
        <pre>{user && JSON.stringify(user, null, 2)}</pre>
      </section>
    </div>
  );
}
