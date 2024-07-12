import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Components/header';

function Layout() {
  return (
    <div>
      <Header/>
      <div className='lg:ml-[13%] lg:p-6'>
      <Outlet/>
      </div>
      </div>
  )
}

export default Layout;
