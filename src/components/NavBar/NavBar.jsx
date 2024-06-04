import { supabase } from '@/supabase';
import { useNavigate } from 'react-router-dom';
import { StNavBar } from './StyledNavbar';

export const NavBar = () => {
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };
  return (
    <StNavBar>
      <button onClick={signOut}>Log Out</button>
    </StNavBar>
  );
};
