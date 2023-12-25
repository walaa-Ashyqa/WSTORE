import React, { createContext, useEffect, useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './layouts/Layout';
import Home from './components/web/home/Home';
import Register from './components/web/register/Register';
import Products from './components/web/products/Products';
import Categories from "./components/web/categories/Categories";

import Login from './components/web/login/Login';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './components/dashboard/home/Home';
import DashboardCategories from './components/dashboard/categories/Categories';
import { jwtDecode } from "jwt-decode";
import CategoriesDetails from './components/web/categories/CategoriesDetails';
import Product from './components/web/products/Product';
import CartContextProvider from './components/web/cart/CartContextProvider';
import Cart from './components/web/cart/Cart';
import {router} from './layouts/routes'
function App() {
   


  return (
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App
