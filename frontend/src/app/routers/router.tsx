import { createBrowserRouter } from 'react-router-dom';
// pages
import TodoListPage from 'pages/todo/TodoListPage';
// pages/auth
import LoginPage from 'pages/auth/LoginPage';
import SigninPage from 'pages/auth/SigninPage';
// pages/error
import ErrorPage from 'pages/error/ErrorPage';
import NotFoundPage from 'pages/error/NotFoundPage';
// layout
import { Layout } from 'pages/layout/Layout';

const PATH_URL = {
  AUTH: 'auth',
  LOGIN: 'login',
  SIGN_IN: 'signin',
};

const authRouter = [
  {
    path: PATH_URL.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH_URL.SIGN_IN,
    element: <SigninPage />,
  },
];

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <TodoListPage /> },
      {
        path: PATH_URL.AUTH,
        children: authRouter,
      },
    ],
    errorElement: <ErrorPage />,
  },
  { path: '*', element: <NotFoundPage /> },
]);
