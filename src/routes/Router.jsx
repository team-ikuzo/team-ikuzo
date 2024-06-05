import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout } from '@/pages/Layout/Layout';
import { ProtectedRoute } from '@/pages/Layout/ProtectedRoute';
import { Login } from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';
import MyPages from '../pages/myPage/MyPages';

// react-router-dom 6v

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
  },
  {
    path: '/create-profile',
    element: <CreateProfile />
  },
  {
    path: '/create-post',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <CreatePost />
      }
    ]
  },
  {
    path: '/myPages',
    element: <MyPages />
  }
]);

export { router };
