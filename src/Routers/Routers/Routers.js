import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import TopRated from "../../pages/TopRated/TopRated";
import Cart from "../../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/toprated',
                element: <TopRated></TopRated>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    }
])

export default router;