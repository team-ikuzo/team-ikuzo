import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout, ProtectedRoute } from '@/pages/Layout';
import { Login } from '@/pages/Login';
import Post from '@/pages/Post/Post';
import { SignUp } from '@/pages/SignUp';
import { UploadImage } from '@/pages/UploadImage';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';
import MyPage from '../pages/myPage/MyPage';

// react-router-dom 6v
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
        path: '/myPage',
        element: <MyPage />
      },
      {
        path: '/updateProfile/:id',
        element: <UpdateProfile />
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
