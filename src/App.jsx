import { router } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import CreatePost from './components/CreatePost/CreatePost';
import MyPages from './pages/myPage/MyPages';
import { store } from './redux/store';
const queryClient = new QueryClient();
import { supabase } from './supabase';
import MyPage from './pages/myPage/MyPage';

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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
        <MyPage />
        <CreatePost></CreatePost>
        <h1>Hello, Team IKUZO!</h1>
      </QueryClientProvider>
    </>
  );
}

export default App;
