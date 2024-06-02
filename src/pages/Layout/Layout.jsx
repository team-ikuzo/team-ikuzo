import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { setSignIn } from '../../redux/authSlice';
import { supabase } from '../../supabase';

export const Layout = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isSignIn = useSelector((state) => state.auth.signIn);

  useEffect(() => {
    async function checkSignIn() {
      const session = await supabase.auth.getSession();
      console.log(session);
      const isSignIn = !!session.data.session;
      dispatch(setSignIn(isSignIn));
      setLoading(false);
    }
    checkSignIn();
  });

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isSignIn ? (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  ) : (
    <Navigate to={'/login'} />
  );
};
