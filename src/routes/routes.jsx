import Jobs from '@pages/Jobs/Jobs';
import LandingPage from '@pages/LandingPage/LandingPage';
import Login from '@pages/Login/Login';
import NotFound from '@pages/NotFound/NotFound';
import Register from '@pages/Register/Register';

const routes = [
    {
        path: '/',
        element: <LandingPage />,
        layout: true,
    },
    {
        path: '/find-job',
        element: <Jobs />,
        layout: true,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;
