import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import SearchGPTpage from './SearchGPTpage';

const Body = () => {
  //dWXuBeY#aL#MVj9
    const app_layout = createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
    {
        path:"/browse",
        element:<Browse></Browse>,
        children:[{

          path:"/browse/Searchpage",
          element:<SearchGPTpage></SearchGPTpage>
        }

        ]

        
    }])
  return (
    <div>
      <RouterProvider router={app_layout}></RouterProvider>
    </div>
  )
}

export default Body
