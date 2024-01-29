import PublicLayout from '@/layouts/Public';
import Page404 from '@/pages/Page404s';
import Login from '@/pages/Logins';

const routes = [
  {
    path: '/*',
    element: <Page404 />,
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
];

export default routes;
