import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import AvailableCars from "../pages/AvailableCars";
import AddCars from "../pages/AddCars";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/available-cars",
                element: <AvailableCars></AvailableCars>
            },
            {
                path: "/add-cars",
                element: <AddCars></AddCars>
            },
            {
                path: "/my-cars",
                element: <MyCars></MyCars>
            },
            {
                path: "/my-bookings",
                element: <MyBookings></MyBookings>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/my-bookings",
                element: <MyBookings></MyBookings>
            }
        ]
    },
]);

export default router