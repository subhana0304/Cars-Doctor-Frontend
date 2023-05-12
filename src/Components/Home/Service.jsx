import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, img, title, price} = service;
    // console.log(service);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <div className='text-orange-600 flex justify-between items-center'>
                <h3 className='text-xl font-semibold text-orange-600 pb-3'>Price : ${price}</h3>
                <Link to={`/checkOut/${_id}`}><FaArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;