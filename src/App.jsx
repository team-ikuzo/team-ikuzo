import { router } from '@/routes';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { supabase } from './supabase';
import MyPages from './pages/myPage/MyPages';
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { useState } from "react";
import CreatePost from "./components/CreatePost/CreatePost";

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
    <Provider store={store}>
      <CreatePost></CreatePost>
    </Provider>
  );
}

export default App;