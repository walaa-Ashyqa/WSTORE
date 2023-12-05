import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/web/home/Home";
import Categories from "../components/web/categories/Categories";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from '../components/dashboard/home/Home';
import DashboardCategories from '../components/dashboard/categories/Categories';
import Register from "../components/web/register/Register";
import Products from "../components/web/products/Products"
import Login from "../components/web/login/Login"
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
     errorElement:<h5>404 Page not found! --- web</h5>,
      children: [
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: 'categories',
          element: <Categories/>,
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "products",
          element: <Products/>
        },
        {
          path: "login",
          element: <Login/>
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      errorElement:<h5>404 Page not found! --- Dashboard</h5>,
      children: [
        {
          path: "home",
          element: <DashboardHome />,
        },
        {
          path: "categories",
          element: <DashboardCategories />,
        },
        
      ],
    },
  ]);