import { Badge } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { calcRem } from '../../helper/caclRem';
import { metrics } from '../../__styling/metrics';

const headerHeight = '80px';
const appMaxWidth = metrics.bpapp.mainContentWidth;
const appContainerPadding = calcRem(metrics.bpapp.margins.md);

export const StyledFormWrap = styled('div')({
  width: calcRem(400),
  margin: '0 auto',
});

export const StyledBadge = styled(Badge)({
  cursor: 'pointer',
});
