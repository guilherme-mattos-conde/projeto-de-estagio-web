import { createBrowserRouter } from 'react-router-dom';
import { ProjectPage } from '../features/project/pages/ProjectPage';
import { AppLayout } from '../pages/AppLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <ProjectPage />,
            },
        ],
    },
]);
