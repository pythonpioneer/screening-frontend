import React from 'react';


export default function Dates({ date }) {
    return (
        <>
            <div className='flex items-center space-x-1'>
                <i class="fa-regular fa-calendar"></i>
                <span>{date}</span>
            </div>
        </>
    )
}
