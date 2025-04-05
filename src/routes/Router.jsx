import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import AvailableCars from "../pages/AvailableCars";
import AddCars from "../pages/AddCars";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/available-cars",
                element: <AvailableCars></AvailableCars>
            },
            {
                path: "/add-cars",
                element: <PrivateRoutes><AddCars></AddCars></PrivateRoutes>
            },
            {
                path: "/my-cars",
                element: <PrivateRoutes><MyCars></MyCars></PrivateRoutes>
            },
            {
                path: "/my-bookings",
                element: <PrivateRoutes> <MyBookings></MyBookings> </PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/cars/:id",
                element: <CarDetails></CarDetails>
            }

        ]
    },
]);

export default router