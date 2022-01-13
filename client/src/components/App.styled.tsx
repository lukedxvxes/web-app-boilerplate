import styled from '@emotion/styled';

const headerHeight = '100px';
const appMaxWidth = '1250px';
const appContainerPadding = '15px';

export const StyledApp = styled('div')({
  border: '1px solid red',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: ` ${headerHeight} auto`,
  height: '100vh',
});

export const StyledHeader = styled('div')({
  border: '1px solid blue',
});

export const StyledContainer = styled('div')({
  maxWidth: appMaxWidth,
  margin: '0 auto',
  width: '100%',
  padding: `0 ${appContainerPadding}`,
});
