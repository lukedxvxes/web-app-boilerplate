import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { StyledContainer, StyledHeader } from '../App.styled';
import { Badge, Button, Flex, Heading } from '@chakra-ui/react';
import { UserContext } from '../../context/userContext';
import { useCookies } from 'react-cookie';
import { StyledHeading } from './Header.styled';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();

  const logoutUser = async () => {
    // log user out
    removeCookie('jwt', { path: '/' });
    setUser(null);
  };

  function handleLoginNavigation() {
    navigate('/login');
  }
  function handleToHomeNavigation() {
    navigate('/');
  }

  const authedLinks = [
    <Button colorScheme="blue" onClick={logoutUser}>
      Logout {user && user.username}
    </Button>,
  ];

  const unAuthedLinks = [
    <Button colorScheme="blue" onClick={handleLoginNavigation}>
      Login
    </Button>,
  ];

  const links = user ? authedLinks : unAuthedLinks;

  return (
    <StyledHeader bg="blue.800" color="white">
      <StyledContainer>
        <Flex justifyContent="space-between" height="100%">
          <Flex alignItems="center" justifyContent="center">
            <StyledHeading as="h2" size="lg" onClick={handleToHomeNavigation}>
              Boilerplate App
            </StyledHeading>
          </Flex>

          <nav>{links.map((item) => item)}</nav>
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
