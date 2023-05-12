import React, { useContext } from 'react';
import loginImg from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    
    }

    return (
        <div className="hero min-h-screen mb-8">
            <div className="lg:flex">
                <div className="w-full lg:w-1/2 p-5">
                    <img className='me-10 pe-10' src={loginImg} alt="" />
                </div>
                <div className="card shadow-2xl w-full lg:w-1/2 bg-base-100">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
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
                        <input className="btn btn-warning" type="submit" value="Login" />
                        </div>
                        </form>
                        <p className='my-6 text-center'>New to Cars-Doctor ? <Link className='text-orange-600' to="/signUp">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;