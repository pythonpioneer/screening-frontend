import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';


export default function Table() {
    return (
        <>
            {/* table description */}
            <h2 className='text-gray-500 font-bold mb-2'>Today's Appointment List</h2>

            <div className='rounded-xl table-enclosing overflow-x-auto'>

                {/* creating table */}
                <table className='my-5 w-full table-auto text-sm rtl:text-right text-gray-500 rounded-2xl'>

                    {/* header of the table */}
                    <TableHead />

                    {/* body and the content of the table */}
                    <TableBody />
                </table>
            </div>
        </>

    )
}