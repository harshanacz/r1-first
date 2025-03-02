import path from 'path';
import { lazy } from 'react';
import UsersListPage from '../pages/UsersListPage.jsx';
import AddUserPage from '../pages/AddUserPage.jsx';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const AboutPage = lazy(() => import('../pages/AboutPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  {path: '/users', element: <UsersListPage/>},
  {path: '/add', element: <AddUserPage/>},
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
