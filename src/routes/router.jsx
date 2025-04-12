import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobsDetails from "../components/JobsDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";

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
                path:'/jobs/:id',
                element: <PrivateRoute><JobsDetails /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signIn',
                element: <SignIn />
            }
        ]
    },
]);


export default router;