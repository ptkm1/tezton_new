import { createBrowserRouter } from "react-router-dom";
import { CompanyScreen } from "./screens/company";
import { DeliveryScreen } from "./screens/delivery";
import { HomeScreen } from "./screens/home";
import { ProductScreen } from "./screens/product";
import { TestScreen } from "./screens/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "company/:company_id",
    element: <CompanyScreen />,
  },
  {
    path: "company/:company_id/product/:product_id",
    element: <ProductScreen />,
  },
  {
    path: "company/:company_id/delivery/:delivery_id",
    element: <DeliveryScreen />,
  },
  {
    path: "company/:company_id/product/:product_id/delivery/:delivery_id",
    element: <DeliveryScreen />,
  },
  {
    path: "test",
    element: <TestScreen />,
  },
]);
