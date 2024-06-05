import { CreateProfile } from '@/pages/CreateProfile/CreateProfile';
import { Home } from '@/pages/Home';
import { Layout, ProtectedRoute } from '@/pages/Layout';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import MyPages from '@/pages/myPage/MyPages';
import { createBrowserRouter } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost';
<<<<<<< HEAD
import MyPage from '../pages/myPage/MyPage';

// react-router-dom 6v
=======
import Post from '@/pages/Post/Post';
>>>>>>> a5d8bd30b5509687a9763fc409d1b5f7300b5722

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
      },{
        path: '/post/:id',
        element:<Post/>
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
<<<<<<< HEAD
  {
    path: '/create-post',
    element: <CreatePost />
  },
  {
    path: '/myPage',
    element: <MyPage />
  }
=======
  { path: '/sign-up', element: <SignUp /> }
>>>>>>> a5d8bd30b5509687a9763fc409d1b5f7300b5722
]);

export { router };
