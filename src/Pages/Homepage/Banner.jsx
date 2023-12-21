import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KVtpmZ5/edu-1.jpg)',backgroundPosition:'top' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <Link to='/login'><button className="btn mt-9 btn-accent">Let’s Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;