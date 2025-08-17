
import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { ItemsListPage } from '../pages/ItemsListPage';
import { ItemDetailPage } from '../pages/ItemDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
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
