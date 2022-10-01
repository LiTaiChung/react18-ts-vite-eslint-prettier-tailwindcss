import PublicLayout from '@/layouts/Public';
import Page404 from '@/pages/page404';
import Home from '@/pages/home';
import Login from '@/pages/login';

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
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
];

export default routes;
