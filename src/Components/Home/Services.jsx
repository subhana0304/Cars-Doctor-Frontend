import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5'>
            <div className='text-center'>
                <h3 className='text-xl font-semibold text-orange-600 pb-3'>Services</h3>
                <h1 className="text-5xl font-semibold">Our Service Area</h1>
                <p className="py-6 lg:w-1/2 text-center mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-5 mb-14'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;