import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main/Main';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AuthProvider from './Provider/AuthProvider';
import CheckOut from './Pages/CheckOut';
import Bookings from './Pages/Bookings';
import PrivateRouter from './Provider/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/booking',
        element: <PrivateRouter><Bookings></Bookings></PrivateRouter>
      },
      {
        path: '/checkOut/:id',
        element:<CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto px-5'>
    <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
  </div>
)
