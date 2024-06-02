import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../pages/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
