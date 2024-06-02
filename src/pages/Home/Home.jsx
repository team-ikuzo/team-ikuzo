import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { StyledHome } from './StyledHome';

const Home = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);
  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  };

  const checkSignIn = async () => {
    const session = await supabase.auth.getSession();
    console.log(session);
    const isSignIn = !!session.data.session;
    setSignIn(isSignIn);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    checkSignIn();
  }, []);

  return (
    <>
      <StyledHome>Hello My Team!</StyledHome>
      {signIn ? (
        <button onClick={signOut}>Log Out</button>
      ) : (
        <button text="로그인" onClick={signInWithGithub}>
          Log In
        </button>
      )}
      {dummy.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </>
  );
};

export { Home };
