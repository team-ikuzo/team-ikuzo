import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout, ProtectedRoute } from '@/pages/Layout';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';
import MyPage from '../pages/myPage/MyPage';

// react-router-dom 6v
import Post from '@/pages/Post/Post';
import UpdateProfile from '@/pages/UpdateProfile/UpdateProfile';

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
      },
      {
        path: '/post/:id',
        element: <Post />
      },
      {
        path: '/create-post',
        element: <CreatePost />
      },
      {
<<<<<<< HEAD
        path: '/myPage',
        element: <MyPage />
=======
        path: '/myPages',
        element: <MyPages />
      },
      {
        path: '/updateProfile/:id',
        element: <UpdateProfile />
>>>>>>> dev
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
    element: <CreatePost />
  },
<<<<<<< HEAD

=======
  {
    path: '/myPages',
    element: <MyPages />
  },
>>>>>>> dev
  { path: '/sign-up', element: <SignUp /> }
]);

export { router };
