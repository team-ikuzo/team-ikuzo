import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../redux/authSlice';
import { supabase } from '../../supabase';
import { StyledHome } from './StyledHome';

const Home = () => {
  const dispatch = useDispatch();
  const signIn = useSelector((state) => state.auth.signIn);

  const signOut = async () => {
    await supabase.auth.signOut();
    dispatch(setSignIn(false));
  };

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
