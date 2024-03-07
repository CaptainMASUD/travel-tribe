import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/Components.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Packages from './Components/Packages/Packages';
import StudentOffer from './Components/StudentOffer/StudentOffer';
import PopularDestinations from './Components/PopularDesitnations/PopularDestinations';
import OtherServices from './Components/OtherServices/OtherServices';
import AboutUS from './Components/AboutUs/AboutUS';
import CustomPackages from './Components/CustomPackages/CustomPackages';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import BookDestinatoins from './Components/BookDestinations/BookDestinatoins';
import Payment from './Components/Payment/Payment';
import PopularPak from './Components/PopularPak/PopularPak';
import User from './Components/User/User';



const router = createBrowserRouter([
  {
    path :'/',
    element: <Layout/>,
    children : [
      {
        path:'',
        element : <Home/>
      },
      {
        path:'student',
        element : <StudentOffer/>
      },
      {
        path:'populardestinations',
        element : <PopularDestinations/>
      },
      {
        path:'otherservices',
        element : <OtherServices/>
      },
      {
        path:'aboutus',
        element : <AboutUS/>
      },
      {
        path: 'custompackages',
        element: <CustomPackages/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'bookdestinations',
        element: <BookDestinatoins/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path: 'popularpackages',
        element: <PopularPak/>
      },
      {
        path: 'user',
        element: <User/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
