import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



function Header() {
 const navigate= useNavigate()
  const notify = () => toast("You Are Signing Out!");
  
function signout() {
notify()
setTimeout(()=>{
  navigate('/')
},2000)
}
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const heading1Items = [
    {
      title: 'User Creation',
      href: '/home/user-creation',
    },
    {
      title: 'User List',
      href: '/home/user-list',
    },
  ];

  const heading2Items = [
    {
      title: 'Store Creation',
      href: '/home/store-creation',
    },
    {
      title: 'Store List',
      href: '/home/store-list',
    },
  ];

  const heading3Items = [];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className='sticky top-0 z-50'>
    <ToastContainer />

    <div>   
    <div className='flex justify-between items-center bg-[#003135] h-20 ml-[19 %]'>
    <div className="lg:hidden">
        <button
          className="text-black p-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
        <div>
      <button onClick={signout} className='signout-button text-white mr-7'>Sign Out</button>
      </div>
      
      </div>
   
    </div>
    <div
        className={`fixed inset-y-0 left-0 bg-[#003135] text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-48 z-50`}
      >
       <Link to='/home'> <div className="flex items-center ml-5 h-20 border-b border-gray-700">
          <img src="yourlogo" alt="Logo" className="h-10 w-10 bg-white rounded-full" />
          <span className="ml-2 text-xl font-semibold">Admin Pannel</span>
        </div>
        </Link>
        <div className="flex flex-col flex-grow overflow-y-auto ">
          <Link to="/home">
            <Dropdown
              title="Dashboard"
              items={heading3Items}
              isOpen={openDropdown === 'Dashboard'}
              onClick={() => toggleDropdown('Dashboard')}
            />
          </Link>
          <Dropdown
            title="User Setup"
            items={heading1Items}
            isOpen={openDropdown === 'User Setup'}
            onClick={() => toggleDropdown('User Setup')}
          />
          <Dropdown
            title="Store Setup"
            items={heading2Items}
            isOpen={openDropdown === 'Store Setup'}
            onClick={() => toggleDropdown('Store Setup')}
          />
        </div>
      </div>

    </div>
  )
}

export default Header;

const Dropdown = ({ title, items, isOpen, onClick }) => {
  return (
    <div className="px-4 py-3 lg:py-4">
      <h2
        className="text-gray-400 uppercase cursor-pointer"
        onClick={onClick}
      >
        {title}
      </h2>
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-wrap flex-col mt-2 space-y-2">
          {items.map((column, index) => (
            <Link
            target="_parent"
              to={column?.href}
              key={index}
              className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded"
            >
              {column?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

