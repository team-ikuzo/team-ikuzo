import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout, ProtectedRoute } from '@/pages/Layout';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import MyPages from '@/pages/myPage/MyPages';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';
import MyPages from '../pages/myPage/MyPages';
// react-router-dom 6v
import Post from '@/pages/Post/Post';

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
  },{
    path : '/post/:id',
    element : <Post/>
  },
  { path: '/sign-up', element: <SignUp /> }
]);

export { router };
