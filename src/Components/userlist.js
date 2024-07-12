import React from 'react';

const posts = [
    { Name: 13, MobileNumber: 'Fusce massa lorem', Email: '01/12/2012', Store: 'lifestyle', Emp:'djt01234', auth:'IT' },
    { Name: 12, MobileNumber: 'Qui tempore rerum ', Email: '07/11/2012', Store: 'lifestyle', Emp:'djt01234', auth:'IT' },
    { Name: 11, MobileNumber: 'Omnis voluptate e', Email: '22/10/2012', Store: 'tech', Emp:'djt01234', auth:'Admin' },
    { Name: 10, MobileNumber: 'Totam vel quasi a ', Email: '19/10/2012', Store: 'lifestyle', Emp:'djt01234', auth:'IT' },
    { Name: 9, MobileNumber: 'A voluptas eius evenie', Email: '16/10/2012', Store: 'tech', Emp:'djt01234', auth:'IT' },
    { Name: 8, MobileNumber: 'Culpa possimus quibus', Email: '02/10/2012', Store: 'lifestyle', Emp:'djt01234', auth:'IT' },
    { Name: 7, MobileNumber: 'Illum veritatis corru', Email: '29/09/2012', Store: 'tech', Emp:'djt01234', auth:'Admin' },
    { Name: 6, MobileNumber: 'Minima ea vero omnis ', Email: '05/09/2012', Store: 'tech', Emp:'djt01234', auth:'IT' },
    { Name: 4, MobileNumber: 'Maiores et itaque ', Email: '12/08/2012', Store: 'lifestyle', Emp:'djt01234', auth:'IT' },
    { Name: 2, MobileNumber: 'Sint dignissimos i', Email: '08/08/2012', Store: 'lifestyle', Emp:'djt01234', auth:'Admin' },
];

function Userlist() {
    return (
        <div className="container overflow-x-auto w-full ml-[1.5%] px-4">
            <table className="min-w-full bg-white">
                <thead className="bg-[#0fa4af] text-white">
                    <tr>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Mobile Number</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Emp. ID</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Store</th>
                        <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Authorization</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {posts.map((post) => (
                        <tr key={post.Name}>
                            <td className="text-center py-3 px-4">{post.Name}</td>
                            <td className="text-center py-3 px-4">{post.MobileNumber}</td>
                            <td className="text-center py-3 px-4">{post.Email}</td>
                            <td className="text-center py-3 px-4">{post.Emp}</td>
                            <td className="text-center py-3 px-4">{post.Store}</td>
                            <td className="text-center py-3 px-4">{post.auth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Userlist;

