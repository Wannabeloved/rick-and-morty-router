
import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { ItemsListPage } from '../pages/ItemsListPage';
import { ItemDetailPage } from '../pages/ItemDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage'; // New import

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
        path: ':category',
        element: <ItemsListPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: ':category/:id',
        element: <ItemDetailPage />,
        errorElement: <NotFoundPage />,
      },
      { // New 404 route
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
