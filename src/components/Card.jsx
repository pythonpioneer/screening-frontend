import React from 'react';


export default function Card() {
    return (
        <>
            <div className="w-[90%] p-5 border-2 border-gray-300 rounded-3xl mx-auto my-4">

                {/* table description */}
                <h2 className='mr-auto text-gray-500 font-bold'>Today's Appointment List</h2>

                <div className='rounded-xl table-enclosing'>
                    {/* creating table */}
                    <table className='w-full'>

                        {/* headings of the table */}
                        <thead className="bg-gray-300 rounded-sm">
                            <tr className="text-left py-5 h-14 text-white font-medium text-sm">
                                <th className=''>PATIENTS</th>
                                <th className=''>DATE</th>
                                <th className=''>TIME</th>
                                <th className=''>DOCTOR</th>
                                <th className=''>INJURY</th>
                                <th className=''>ACTION</th>
                            </tr>
                        </thead>

                        {/* body and the content of the table */}
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">2024-03-02</td>
                                <td className="p-3">10:00 AM</td>
                                <td className="p-3">Dr. Smith</td>
                                <td className="p-3">Fracture</td>
                                <td className="p-3">
                                    <button className="bg-red-500 text-white p-2 ml-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
