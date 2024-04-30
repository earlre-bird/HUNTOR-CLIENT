import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import UserPage from './pages/User/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
]);


export default router;