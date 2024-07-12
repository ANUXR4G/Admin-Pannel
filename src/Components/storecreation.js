import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Storecreation = () => {
    const notify = () => toast("Store created successfully!");
    const [formData, setFormData] = useState({
        storecode: '',
        storename: '',
        building: '',
        street: '',
        block: '',
        city: '',
        zipcode: '',
        state: '',
        country: '',
        address: '',
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
            storecode: '',
            storename: '',
            building: '',
            street: '',
            block: '',
            city: '',
            zipcode: '',
            state: '',
            country: '',
            address: '',
        });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    return (
        <div className="p-8 lg:mt-[-35px]">
            <ToastContainer />
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="storecode" className="block text-sm font-medium">Store Code *</label>
                        <input
                            type="text"
                            name="storecode"
                            id="storecode"
                            placeholder="Enter Store Code"
                            required
                            value={formData.storecode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="storename" className="block text-sm font-medium">Store Name *</label>
                        <input
                            type="text"
                            name="storename"
                            id="storename"
                            placeholder="Enter Store Name"
                            required
                            value={formData.storename}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="building" className="block text-sm font-medium">Building/Floor/Room *</label>
                        <input
                            type="text"
                            name="building"
                            id="building"
                            placeholder="Enter Building/Floor/Room"
                            required
                            value={formData.building}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="street" className="block text-sm font-medium">Street *</label>
                        <input
                            type="text"
                            name="street"
                            id="street"
                            placeholder="Enter Street"
                            required
                            value={formData.street}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="block" className="block text-sm font-medium">Block *</label>
                        <input
                            type="text"
                            name="block"
                            id="block"
                            placeholder="Enter Block"
                            required
                            value={formData.block}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-medium">City *</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Enter City"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="zipcode" className="block text-sm font-medium">Zip Code *</label>
                        <input
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            placeholder="Enter Zip Code"
                            required
                            value={formData.zipcode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="state" className="block text-sm font-medium">State *</label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="Enter State"
                            required
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="country" className="block text-sm font-medium">Country *</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Enter Country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium">Address *</label>
                    <textarea
                        name="address"
                        id="address"
                        placeholder="Enter Address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded h-32"
                    />
                </div>
                <button type="submit" className="w-full bg-[#003135] hover:bg-[#0fa4af] text-white py-2 rounded">Create Store</button>
            </form>
        </div>
    );
};

export default Storecreation;
