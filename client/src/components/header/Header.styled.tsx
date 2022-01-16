import { Box, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledHeader = styled(Box)({
  height: '100%',
  nav: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    'a:not(last-child)': {
      marginRight: '10px',
    },
  },
  '>div': {
    height: '100%',
  },
});

export const StyledHeading = styled(Heading)({
  cursor: 'pointer',
});
