import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Main from './LayOut/Main/Main';
import About from './Pages/About/About';
import Vehicles from './Pages/Vehicles/Vehicles';
import Teams from './Pages/Teams/Teams';
import RoboSub from './Pages/RoboSub/RoboSub';
import ContactUs from './Pages/ContactUs/ContactUs';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/vehicles',
          element: <Vehicles />
        },
        {
          path: '/vehicles/:model',
          element: <Vehicles />
        },
        {
          path: '/teams',
          element: <Teams />
        },
        {
          path: '/robosub',
          element: <RoboSub />
        },
        {
          path: '/contactus',
          element: <ContactUs />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
