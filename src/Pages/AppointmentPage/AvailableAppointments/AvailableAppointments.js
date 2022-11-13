import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                setAppointmentOptions(data);
            })
    }, [])

    return (
        <section className='my-24'>
            <p
                className='text-secondary text-[22px] text-center font-semibold'
            >
                Available Appointments on {format(selectedDate, 'PPP')}
            </p>
            <div className='mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[85%] lg:mx-auto'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;