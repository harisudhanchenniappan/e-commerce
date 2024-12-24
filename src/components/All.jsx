import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginSignupPage from '../pages/LoginSignupPage'
import Home from '../pages/Home'
import BookDetails from '../pages/BookDetails'
import Cart from './Cart'
import BuyNow from '../pages/BuyNow'
import YourOrders from '../pages/YourOrders'
import WelcomePage from '../pages/WelcomePage'
import FirstPage from '../pages/FirstPage'

const router=createBrowserRouter([
    {
    path:'/',
    element:<WelcomePage />
    
    },
    {
        path:'/Login-signup',
        element:<LoginSignupPage />
      },
      {
        path:'/first-page',
        element:<FirstPage />,
        children:[
            {
                index:true,
               // path:'/first-page/allBooks',
                element: <Home />,
              },
              {
                path:"/first-page/book/:id",
                 element:<BookDetails />
              },
              {
                path:'/first-page/cart',
                element:<Cart />
              },
              {
                path:'/first-page/buy-now',
                element:<BuyNow />
              },
              {
                path:'/first-page/orders',
                element:<YourOrders />
              }
        ]
      },
    
      
      
    ])
    const All = () => {
      return <RouterProvider router={router} />
    }
    
    export default All