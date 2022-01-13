import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { login } from '../auth/Login';
import { UserContext } from '../context/userContext';

export function Login() {
  const { user, setUser } = useContext(UserContext);

  const loginUser = async () => {
    const user = await login();
    setUser(user);
  };

  const logoutUser = async () => {
    // log user out
    setUser(null);
  };

  return (
    <div className="page login-page">
      <h1>Login</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {user ? (
        <Button onClick={logoutUser}>logout</Button>
      ) : (
        <Button onClick={loginUser}>login</Button>
      )}
    </div>
  );
}
