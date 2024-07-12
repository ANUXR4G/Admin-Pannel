import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout';
import Usercreation from './Components/usercreation';
import Storecreation from './Components/storecreation';
import Login from './Components/login';
import Home from './home';
import Userlist from './Components/userlist';
import Storelist from './storelist';

const route = createBrowserRouter([{

  path: "/",
  element: <Login />

}, {
  path: "/home",
  element: <Layout />,
  children: [
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/home/user-creation",
      element: <Usercreation />
    },
    {
      path: "/home/store-creation",
      element: <Storecreation />
    },
    {
      path: "/home/user-list",
      element: <Userlist />
    },
    {
      path: "/home/store-list",
      element: <Storelist />
    },

  ]
},
])

function App() {

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
