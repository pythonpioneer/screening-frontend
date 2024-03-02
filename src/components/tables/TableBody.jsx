import React from 'react';
import Action from '../tableContent/Action';
import Dates from '../tableContent/Dates';
import Doctor from '../tableContent/Doctor';
import Profile from '../tableContent/Profile';
import Time from '../tableContent/Time';

// the component will dispaly the table content
export default function TableBody({ patientName, imgValue, mobileNumber, date, time, doctorName, injury }) {
    return (
        <>
            <tbody className='text-left'>
                <tr className="border-b">
                    <td className="p-2" style={{ minWidth: '166px' }}>
                        <Profile imgValue={imgValue} fullName={patientName} mobileNumber={mobileNumber} />
                    </td>
                    <td style={{ minWidth: '100px' }}>
                        <Dates date={date} />
                    </td>
                    <td style={{ minWidth: '100px' }}>
                        <Time time={time} />
                    </td>
                    <td style={{ minWidth: '120px' }}>
                        <Doctor name={doctorName} />
                    </td>
                    <td style={{ minWidth: '100px' }}>
                        {injury}
                    </td>
                    <td className="pl-7" style={{ minWidth: '100px' }}>
                        <Action />
                    </td>
                </tr>
            </tbody>
        </>
    )
}
