import { router } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
<<<<<<< Updated upstream
import CreatePost from './components/CreatePost/CreatePost';
import MyPages from './pages/myPage/MyPages';
import { store } from './redux/store';
const queryClient = new QueryClient();
=======
import { supabase } from './supabase';
import MyPage from './pages/myPage/MyPage';
>>>>>>> Stashed changes

const Globalstyle = createGlobalStyle`
  ${reset}
`;
function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await supabase.from('page').select('*');
      console.log(data);
    };
    getData();
  });

  return (
    <>
      <Globalstyle />
<<<<<<< Updated upstream
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
        <MyPages />
        <CreatePost></CreatePost>
        <h1>Hello, Team IKUZO!</h1>
      </QueryClientProvider>
=======
      <RouterProvider router={router} />
      <MyPage />
      <h1>Hello, Team IKUZO!</h1>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
