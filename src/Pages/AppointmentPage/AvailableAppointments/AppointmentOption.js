import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <section>
            <div className="card shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-secondary font-semibold text-xl">{name}</h2>
                    <p className='my-2 text-sm'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='mb-2 text-sm'>{slots.length > 0 ? `${slots.length} Spaces Available` : 'No Space Available'}</p>
                    <div className="w-3/4 mx-auto">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentOption;