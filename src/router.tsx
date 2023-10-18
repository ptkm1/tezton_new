import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "./screens/home";
import { CompanyScreen } from "./screens/company";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "company/:company_id",
        element: <CompanyScreen />,
    },
]);