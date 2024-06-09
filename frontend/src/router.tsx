import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import SearchPage from './pages/Search/SearchPage';
import UserPage from './pages/User/UserPage';
import EnrollmentPage from './pages/Enrollment/EnrollmentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/enrollment',
    element: <EnrollmentPage />
  }
]);


export default router;