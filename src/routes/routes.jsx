import Layout from '@layouts/Layout';
import Login from '@pages/Login/Login';
import NotFound from '@pages/NotFound/NotFound';
import Register from '@pages/Register/Register';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
]);

export default router;