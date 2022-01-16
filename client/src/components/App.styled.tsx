import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { metrics } from '../__styling/metrics';
import { calcRem } from '../helper/caclRem';

const headerHeight = '80px';
const appMaxWidth = metrics.lunchtalks.mainContentWidth;
const appContainerPadding = calcRem(metrics.lunchtalks.margins.md);

export const StyledApp = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: ` ${headerHeight} auto`,
  height: '100vh',
});

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

export const StyledContainer = styled('div')({
  maxWidth: appMaxWidth,
  margin: '0 auto',
  width: '100%',
  padding: `0 ${appContainerPadding}`,
});

export const PageContainer = styled(Box)(({ theme }) => ({
  marginTop: calcRem(25),
}));
