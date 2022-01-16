import { Badge, Box, Button, Heading, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { PageContainer } from '../../components/App.styled';
import { login } from '../../auth/Login';
import { UserContext } from '../../context/userContext';
import { LoginForm } from '../../components/forms/LoginForm';
import { StyledBadge, StyledFormWrap } from './Auth.styled';
import { useCookies } from 'react-cookie';
import { CreateAccountForm } from '../../components/forms/CreateAccountForm';

export function Auth() {
  const [createAccount, setCreateAccount] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const [cookies, removeCookie] = useCookies(['jwt']);

  const logoutUser = async () => {
    // log user out
    removeCookie('jwt', { path: '/' });
    setUser(null);
  };

  const authForm = createAccount ? (
    <CreateAccountForm setUser={setUser} setCreateAccount={setCreateAccount} />
  ) : (
    <LoginForm setUser={setUser} />
  );

  return (
    <PageContainer className="page login-page">
      <StyledFormWrap>
        <Box mb={5}>
          <Heading as="h1" size="xl" mb="2">
            {createAccount ? 'Create Account' : 'Log in'}
          </Heading>
          {createAccount ? (
            <StyledBadge onClick={() => setCreateAccount(false)}>
              or log in here
            </StyledBadge>
          ) : (
            <StyledBadge onClick={() => setCreateAccount(true)}>
              or create an account here
            </StyledBadge>
          )}
        </Box>
        <Box>{authForm}</Box>
      </StyledFormWrap>
    </PageContainer>
  );
}
