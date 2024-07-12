import React, { useState, useEffect } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'your_password_here') { 
      onLogin(email);
      setShowSuccessModal(true);
    } else {
      setError('Invalid password');
      setShowErrorModal(true);
    }
  };

  useEffect(() => {
    if (showErrorModal) {
      const timer = setTimeout(() => {
        setShowErrorModal(false);
        setError(null);
        setEmail('');
        setPassword('');
      }, 1000); 

      return () => clearTimeout(timer); 
    }
  }, [showErrorModal]);

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#003135]">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className='flex justify-center'>
        <span className="text-3xl font-bold text-center mb-6 text-[#0fa4af]">ROA Admin Login</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <MdEmail  className="text-gray-600 text-lg" />
            <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <div className="flex items-center space-x-2">
            <RiLockPasswordFill className="text-gray-600 text-lg" />
            <label htmlFor="password" className="text-gray-700 font-medium">Password:</label>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
          <Link to="/home">
          <button
            type="submit"
            className="w-full mt-5 bg-[#0fa4af] text-white py-2 px-4 rounded-md hover:bg-[#003135] transition duration-300"
          >
            Login 
          </button>
          </Link>
        </form>
      </div>

      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p>{error}</p>
            <button
              onClick={() => {
                setShowErrorModal(false);
                setError(null);
                setEmail('');
                setPassword('');
              }}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Success</h2>
            <p>Login Successful!</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;