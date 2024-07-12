import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Usercreation = () => {
  const notify = () => toast("User created successfully!");
  const [formData, setFormData] = useState({
    Name: '',
    mobileNumber: '',
    email: '',
    Warehouse: '',
    employeeId: '',
    authorization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    notify();
    setFormData({
      Name: '',
      mobileNumber: '',
      email: '',
      Warehouse: '',
      employeeId: '',
      authorization: '',
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      <form className="contact-form p-8" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="form-group flex flex-col">
            <label htmlFor="Name" className="mt-2">Name*</label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter Name"
              value={formData.Name}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="mobileNumber" className="mt-2">Mobile Number *</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              value={formData.mobileNumber}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="email" className="mt-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="form-group flex flex-col">
            <label htmlFor="employeeId" className="mt-2">Employee Id *</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              placeholder="Enter Employee Id"
              value={formData.employeeId}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="form-group flex flex-col">
            <label htmlFor="Warehouse" className="mt-2">Store *</label>
            <input
              type="text"
              id="Warehouse"
              name="Warehouse"
              placeholder="Enter Store"
              value={formData.Warehouse}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="form-group flex flex-col">
            <label htmlFor="authorization" className="mt-2">Authorization *</label>
            <input
              type="text"
              id="authorization"
              name="authorization"
              placeholder="Enter Authorization"
              value={formData.authorization}
              required
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        </div>
        <button type="submit" className="contact-button mt-5 bg-teal-500 text-white py-2 px-4 rounded">
          Create User
        </button>
      </form>
    </div>
  );
};

export default Usercreation;
