import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../supabase';

export const ProtectedRoute = ({ children }) => {
  const { data: certification, isLoading } = useQuery({
    queryKey: ['isSignIn'],
    queryFn: async () => {
      const session = await supabase.auth.getSession();
      const isSession = !!session.data.session;
      if (!isSession) return { isAuthenticated: isSession };
      const { data: user_id } = await supabase.from('users').select('*').eq('user_id', session.data.session.user.id);
      if (user_id.length === 0)
        return {
          isAuthenticated: isSession,
          isProfile: false
        };
      return { isAuthenticated: isSession, isProfile: true };
    }
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (!certification.isAuthenticated) return <Navigate to={'/login'} />;
  if (!certification.isProfile) return <Navigate to={'/create-profile'} />;
  return <>{children}</>;
};
