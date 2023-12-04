import React from 'react'
import {router} from './layouts/routes'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
 

  return (
    <RouterProvider router={router} />

  )
}

export default App
