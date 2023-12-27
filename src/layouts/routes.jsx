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
import Cart from "../components/web/cart/Cart";
import Product from "../components/web/products/Product";
import CategoriesDetails from "../components/web/categories/CategoriesDetails";
import ForgetPassword from "../components/web/password/ForgetPassword";
import ResetPassword from "../components/web/password/ResetPassword";
import Profile from "../components/web/profile/Profile";
import ProtectRoute from "../components/web/rules/ProtectRoute";
import Auth from "../components/web/rules/Auth";
import CreateOrder from "../components/web/order/CreateOrder";
import UserInfo from "../components/web/profile/UserInfo";
import UserContact from "../components/web/profile/UserContact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
     errorElement:<h5>404 Page not found! --- web</h5>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: 'categories',
          element: <Categories/>,
        },
        {
          path: '/products/category/:categoryID',
          element: <CategoriesDetails/>,
        },
        {
          path: 'product/:productID',
          element: <Product/>  ,
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
          path: "cart",
          element: <Cart/>
        },
        {
          path: "login",
          
          element:
            <Login/>
         
        },
        {
          path: "forgetpassword",
          element: <ForgetPassword/>
        }
        ,
        {
          path: "resetpassword",
          element: <ResetPassword/>
        },
        {
          path: "profile",
          element: <ProtectRoute>
            <Profile/>
            </ProtectRoute>,
            children:
          [ 
             { path: "info",
          element: <UserInfo/>}
          ,
          { path: "contact",
          element: <UserContact/>}
        ]
        },
         {
          path: "order",
          element: <CreateOrder/>
        },
      ]
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