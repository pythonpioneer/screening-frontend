import React from 'react';
import Action from './Action';
import Dates from './Dates';
import Doctor from './Doctor';
import Profile from './Profile';
import Time from './Time';

// the component will dispaly the table content
export default function TableBody({ patientName, imgValue, mobileNumber, date, time, doctorName, injury }) {
    return (
        <>
            <tbody>
                <tr className="border-b">
                    <td className="p-3">
                        <Profile imgValue={1} fullName={"hritik kumar"} mobileNumber={'9876543210'} />
                    </td>
                    <td className="p-3">
                        <Dates date={'12-12-12'} />
                    </td>
                    <td className="p-3">
                        <Time time={'10:00 AM'} />
                    </td>
                    <td className="p-3">
                        <Doctor name={"smith hoe"} />
                    </td>
                    <td className="p-3">{'Fracture'}</td>
                    <td className="p-3">
                        <Action />
                    </td>
                </tr>
            </tbody>
        </>
    )
}
