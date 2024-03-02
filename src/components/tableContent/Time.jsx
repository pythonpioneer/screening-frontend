import React from 'react';


export default function Time({ time }) {
	return (
		<>
			<div className='flex items-center space-x-1'>
				<i className="fa-regular fa-clock"></i>
				<span>{time}</span>
			</div>
		</>
	)
}