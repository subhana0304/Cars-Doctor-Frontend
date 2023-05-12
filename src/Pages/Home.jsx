import React from 'react';
import Banners from '../Components/Home/Banners';
import About from '../Components/Home/About';
import Services from '../Components/Home/Services';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;