import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

ReactDOM.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ChakraProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
