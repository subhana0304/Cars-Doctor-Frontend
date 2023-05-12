import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBook = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: _id,
            title,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }


    return (
        <div className='my-12'>
            <h1 className='text-center font-semibold text-4xl mb-5'>Book Service: {title}</h1>
            <form onSubmit={handleBook}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.name} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name='amount' defaultValue={'$' + price} className="input input-bordered" />
                </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-warning btn-block" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default CheckOut;