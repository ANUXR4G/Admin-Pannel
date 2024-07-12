import React from 'react';

const posts = [
    { Code: 13, Name: 'Fusce massa lorem', Building: '01/12/2012', Street: 'lifestyle', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 12, Name: 'Qui tBlockore rerum et voluptates', Building: '07/11/2012', Street: 'lifestyle', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 11, Name: 'Omnis voluptate enim similiquie est possimus', Building: '22/10/2012', Street: 'tech', Block:'djt01234', City:'Admin', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 10, Name: 'Totam vel quasi a odio et nihil', Building: '19/10/2012', Street: 'lifestyle', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 9, Name: 'A voluptas eius eveniet ut commodi dolor', Building: '16/10/2012', Street: 'tech', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 8, Name: 'Culpa possimus quibusdam nostrum', Building: '02/10/2012', Street: 'lifestyle', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 7, Name: 'Illum veritatis corrupti exercitationem sed velit', Building: '29/09/2012', Street: 'tech', Block:'djt01234', City:'Admin', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 6, Name: 'Minima ea vero omnis odit officiis aut', Building: '05/09/2012', Street: 'tech', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 4, Name: 'Maiores et itaque aut perspiciatis', Building: '12/08/2012', Street: 'lifestyle', Block:'djt01234', City:'IT', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
    { Code: 2, Name: 'Sint dignissimos in architecto aut', Building: '08/08/2012', Street: 'lifestyle', Block:'djt01234', City:'Admin', zip: '210304', state: 'Noida', country: 'India', Address: 'Sector-125, Noida' },
];

function Storelist() {
    return (
        <div className='ml-[3%]'>
        <div classCode="container mx-auto">
            <table classCode="min-w-full bg-white">
                <thead className="bg-[#0fa4af] text-white">
                    <tr>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Store Code</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Store Name</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Building / Floor / Room </th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Street</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Block</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">City</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Zip Code</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">State</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Country</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Address</th>
                    </tr>
                </thead>
                <tbody classCode="text-gray-700">
                    {posts.map((post) => (
                        <tr key={post.Code}>
                            <td className="text-center py-3 px-4">{post.Code}</td>
                            <td className="text-center py-3 px-4">{post.Name}</td>
                            <td className="text-center py-3 px-4">{post.Building}</td>
                            <td className="text-center py-3 px-4">{post.Street}</td>
                            <td className="text-center py-3 px-4">{post.Block}</td>
                            <td className="text-center py-3 px-4">{post.City}</td>
                            <td className="text-center py-3 px-4">{post.zip}</td>
                            <td className="text-center py-3 px-4">{post.state}</td>
                            <td className="text-center py-3 px-4">{post.country}</td>
                            <td className="text-center py-3 px-4">{post.Address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Storelist;

