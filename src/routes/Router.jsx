import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../pages/Layout/Layout';
import { ProtectedRoute } from '../pages/Layout/ProtectedRoute';

// react-router-dom 6v

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export { router };
