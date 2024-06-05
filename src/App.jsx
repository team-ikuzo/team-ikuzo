import { router } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
<<<<<<< HEAD
import CreatePost from './components/CreatePost/CreatePost';
import MyPage from './pages/myPage/MyPage';
=======
>>>>>>> a5d8bd30b5509687a9763fc409d1b5f7300b5722
import { store } from './redux/store';
const queryClient = new QueryClient();
import { supabase } from './supabase';
import { useEffect } from 'react';

const Globalstyle = createGlobalStyle`
  ${reset}
`;
<<<<<<< HEAD
=======

>>>>>>> a5d8bd30b5509687a9763fc409d1b5f7300b5722
function App() {
  return (
    <>
      <Globalstyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
<<<<<<< HEAD

        <h1>Hello, Team IKUZO!</h1>
=======
>>>>>>> a5d8bd30b5509687a9763fc409d1b5f7300b5722
      </QueryClientProvider>
    </>
  );
}

export default App;
