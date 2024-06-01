import { router } from '@/routes';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { supabase } from './supabase';

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
      <RouterProvider router={router} />
      <h1>Hello, Team IKUZO!</h1>
    </>
  );
}

export default App;
