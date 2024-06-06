import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout, ProtectedRoute } from '@/pages/Layout';
import { Login } from '@/pages/Login';
import Post from '@/pages/Post/Post';
import { SignUp } from '@/pages/SignUp';
import { UploadImage } from '@/pages/UploadImage';
import MyPages from '@/pages/myPage/MyPages';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';

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
        path: '/myPages',
        element: <MyPages />
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
  { path: '/sign-up', element: <SignUp /> },
  {
    path: '/upload-image',
    element: <UploadImage />
  }
]);

export { router };
