import React from 'react';
import Chartsdashboard from './Components/charts';

const data = [
    { title: 'Total Orders', value: 384 },
    { title: 'Delivered Orders', value: 303, },
];

const Dashboard = () => {
    return (
        <div>
        <div className="p-6 min-h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First item */}
                <div className='text-white bg-[#003135] p-4 rounded-lg shadow'>
                    <h2 className="text-xl font-bold">{data[0].title}</h2>
                    <p className="text-3xl">{data[0].value}</p>
                </div>

                {/* Second item */}
                <div className='text-white bg-[#0fa4af] p-4 rounded-lg shadow'>
                    <h2 className="text-xl font-bold">{data[1].title}</h2>
                    <p className="text-3xl">{data[1].value}</p>
                </div>
            </div>
        </div>
        <div className='ml-[3%] mt-10'>
        <Chartsdashboard/>
        </div>
        </div>
    );
};

export default Dashboard;
