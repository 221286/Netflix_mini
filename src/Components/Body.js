import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  //dWXuBeY#aL#MVj9
    const app_layout = createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
    {
        path:"/browse",
        element:<Browse></Browse>
    }])
  return (
    <div>
      <RouterProvider router={app_layout}></RouterProvider>
    </div>
  )
}

export default Body
