import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div className='mt-9'>
            <h1 className='text-3xl font-semibold text-gray-600'>Payment for <span className='text-amber-600 font-serif font-bold'>{booking?.treatment}</span></h1>
        </div>
    );
};

export default Payment;