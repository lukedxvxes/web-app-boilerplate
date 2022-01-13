import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { Home, Login, Profile, NotFound } from '../pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StyledApp, StyledContainer, StyledHeader } from './App.styled';
import { Box } from '@chakra-ui/react';
import { UserContext } from '../context/userContext';

interface AppProps {}

function App({}: AppProps) {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <StyledApp>
      <BrowserRouter>
        <UserContext.Provider value={providerUser}>
          <StyledHeader>
            <StyledContainer>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
              </nav>
            </StyledContainer>
          </StyledHeader>

          <StyledContainer>
            <Box bg="red.400">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Box>
          </StyledContainer>
        </UserContext.Provider>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
