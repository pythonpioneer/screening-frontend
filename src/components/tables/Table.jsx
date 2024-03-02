import React, { useEffect, useState } from 'react';
import { fetchPatientData } from '../../services';
import { formatDate } from '../../utils';
import TableBody from './TableBody';
import TableHead from './TableHead';


export default function Table() {

    const [patientData, setPatientData] = useState([]);

    // fethcing patient data
    const fetchData = async () => {
        let result = await fetchPatientData();
        setPatientData(result);
    }

    // fetch teh patient data after page mounting
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {/* table description */}
            <h2 className='text-gray-500 font-bold'>Today's Appointment List</h2>

            <div className='rounded-xl table-enclosing overflow-x-auto'>

                {/* creating table */}
                <table className='my-5 w-full table-auto text-sm rtl:text-right text-gray-500 rounded-2xl'>

                    {/* header of the table */}
                    <TableHead />

                    {/* body and the content of the table */}
                    {patientData.length > 0 && patientData.map((data, idx) => {
                        return <TableBody
                            key={idx}
                            patientName={data?.patient_name || "No Name"}
                            mobileNumber={data?.mobile_number || "No contact"}
                            date={formatDate(data?.appointment_date) || "No Appointment"}
                            time={data?.appointment_time || "No Data"}
                            doctorName={data?.doctor || "No Data"}
                            injury={data?.injury || "No Data"}
                            imgValue={idx}
                        />
                    })}
                </table>
            </div>
        </>

    )
}