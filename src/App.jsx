import { router } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { store } from './redux/store';

const queryClient = new QueryClient();

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
