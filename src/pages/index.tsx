
import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/Layout';
import { HomePage } from './HomePage';
import { ItemsListPage } from './ItemsListPage';
import { ItemDetailPage } from './ItemDetailPage';
import { NotFoundPage } from './NotFoundPage';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: ':category',
        element: (
          <ProtectedRoute>
            <ItemsListPage />
          </ProtectedRoute>
        ),
        errorElement: <NotFoundPage />,
      },
      {
        path: ':category/:id',
        element: (
          <ProtectedRoute>
            <ItemDetailPage />
          </ProtectedRoute>
        ),
        errorElement: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
