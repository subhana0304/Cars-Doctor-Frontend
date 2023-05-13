import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} =useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn();
    }

    return (
        <div className='text-center'>
            
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default SocialLogin;