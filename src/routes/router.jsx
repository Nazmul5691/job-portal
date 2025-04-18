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
import MyApplications from "../pages/MyApplications";
import AddJobs from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";
import AllJobs from "../pages/AllJobs";

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
                path: '/jobs',
                element: <AllJobs />,
            },
            {
                path:'jobs/:id',
                element: <PrivateRoute><JobsDetails /></PrivateRoute>,
                loader: ({params})=> fetch(`https://job-portal-server-lilac-phi.vercel.app/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: 'addJobs',
                element: <PrivateRoute><AddJobs /></PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({params})=> fetch(`https://job-portal-server-lilac-phi.vercel.app/job-applications/jobs/${params.job_id}`)
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'signIn',
                element: <SignIn />
            }
        ]
    },
]);


export default router;