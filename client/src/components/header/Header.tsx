import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { StyledContainer, StyledHeader } from '../App.styled';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { UserContext } from '../../context/userContext';
import { useCookies } from 'react-cookie';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  const logoutUser = async () => {
    // log user out
    removeCookie('jwt', { path: '/' });
    setUser(null);
  };

  const authedLinks = [
    <Link to="/profile">Profile</Link>,
    <Button colorScheme="blue" onClick={logoutUser}>
      Logout
    </Button>,
  ];

  const unAuthedLinks = [<Link to="/login">Login</Link>];

  const links = user ? authedLinks : unAuthedLinks;

  return (
    <StyledHeader bg="blue.800" color="white">
      <StyledContainer>
        <Flex justifyContent="space-between" height="100%">
          <Flex alignItems="center">
            <Heading as="h2" size="lg">
              Lunch and Learn
            </Heading>
          </Flex>

          <nav>
            <Link to="/">Home</Link>
            {links.map((item) => item)}
          </nav>
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
