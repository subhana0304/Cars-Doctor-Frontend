import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banners = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex h-full left-0 bottom-0 top-0 items-center my-auto  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-6  text-white lg:w-1/2 ps-10'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-warning">Discover more</button>
                        <button className="btn btn-outline btn-warning ms-5">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-5">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex h-full left-0 bottom-0 top-0 items-center my-auto  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-6  text-white w-1/2 ps-10'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-warning">Discover more</button>
                        <button className="btn btn-outline btn-warning ms-5">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-5">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex h-full left-0 bottom-0 top-0 items-center my-auto  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-6  text-white w-1/2 ps-10'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-warning">Discover more</button>
                        <button className="btn btn-outline btn-warning ms-5">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-5">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex h-full left-0 bottom-0 top-0 items-center my-auto  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-6  text-white w-1/2 ps-10'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-warning">Discover more</button>
                        <button className="btn btn-outline btn-warning ms-5">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle me-5">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-warning">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banners;