import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className="page home-page">
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
