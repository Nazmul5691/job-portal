import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h3>Routes not found</h3>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);


export default router;