import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="page profile-page">
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
