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
                        <Profile imgValue={1} fullName={"hritik kumar"} mobileNumber={'9876543210'} />
                    </td>
                    <td className="" style={{ minWidth: '100px' }}>
                        <Dates date={'12-12-12'} />
                    </td>
                    <td className="" style={{ minWidth: '100px' }}>
                        <Time time={'10:00 AM'} />
                    </td>
                    <td className="" style={{ minWidth: '150px' }}>
                        <Doctor name={"smith hoe"} />
                    </td>
                    <td className="" style={{ minWidth: '100px' }}>
                        {'Fracture'}
                    </td>
                    <td className="pl-7" style={{ minWidth: '100px' }}>
                        <Action />
                    </td>
                </tr>
            </tbody>
        </>
    )
}
