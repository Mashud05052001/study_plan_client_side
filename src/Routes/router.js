import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Cartsection from "../Components/Cartsection";
import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Register from "../Components/Register";
import SingleCourseDetailes from "../Components/SingleCourseDetailes";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            {
                path: '/courses', element: <Courses />,
                loader: () => fetch('https://study-plan-backend.vercel.app/courses')
            },
            {
                path: '/courses/:id', element: <SingleCourseDetailes />,
                loader: async ({ params }) => fetch(`https://study-plan-backend.vercel.app/courses/${params.id}`)
            },
            { path: '/faq', element: <Faq /> },
            {
                path: '/blog', element: <Blog />,
                loader: () => fetch('answer.json')
            },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/register', element: <Register /> },
            {
                path: '/cart/:id', element: <PrivateRoute><Cartsection /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://study-plan-backend.vercel.app/courses/${params.id}`)
            },



        ]
    }
])