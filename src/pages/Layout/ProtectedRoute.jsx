import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../supabase';

export const ProtectedRoute = ({ children }) => {
  const { data: isSignIn, isLoading } = useQuery({
    queryKey: ['isSignIn'],
    queryFn: async () => {
      const session = await supabase.auth.getSession();
      return !!session.data.session;
    }
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (!isSignIn) return <Navigate to={'/login'} />;
  return <>{children}</>;
};
