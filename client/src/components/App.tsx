import React, { useState, useMemo, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Profile, NotFound, Auth } from '../pages';
import { Box, ChakraProvider, toast } from '@chakra-ui/react';

import { UserContext } from '../context/userContext';

import Header from './header/Header';

import { StyledApp, StyledContainer } from './App.styled';
import { useLogin } from './hooks/useLogin';
import { useCookies } from 'react-cookie';

interface AppProps {}

const queryClient = new QueryClient();

function App({}: AppProps) {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [cookies, setCookie] = useCookies(['jwt']);

  const currentUser = useQuery(
    'current-user',
    async () => {
      const headers = {
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookies.jwt}`,
      };

      const res = await fetch('http://localhost:4000/users/current', {
        headers: headers,
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const currentUser = await res.json();
      if (!user) {
        setUser(currentUser);
      }

      return currentUser;
    },
    {
      // Refetch the data every second
      enabled: !!cookies.jwt,
    },
  );

  return (
    <BrowserRouter>
      <StyledApp>
        <UserContext.Provider value={providerUser}>
          <Header />
          {/* {!isLoading && <pre>{data}</pre>} */}
          <StyledContainer>
            <Box>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Box>
          </StyledContainer>
        </UserContext.Provider>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
