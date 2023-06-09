import React, { useContext } from 'react';
import loginImg from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../LayOut/SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen mb-8">
            <div className="lg:flex">
                <div className="w-full lg:w-1/2 p-5">
                    <img className='me-10 pe-10' src={loginImg} alt="" />
                </div>
                <div className="card shadow-2xl w-full lg:w-1/2 bg-base-100">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold">Please SignUp!</h1>
                        <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                        </form>
                        <p className='my-6 text-center'>Already have an account ? <Link className='text-orange-600' to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;