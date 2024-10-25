import Layout from '@layouts/Layout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
        ],
    },
]);

export default router;