import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
    const isSticky = useScroll();

    console.log(isSticky);
    const navLinks = <>
        <NavLink className="text-xl mx-4 font-bold border-base-content font-mono hover:border-b-4 hover:opacity-20" to="/">Home</NavLink>
        <NavLink className="text-xl mx-4 font-bold border-base-content font-mono hover:border-b-4 hover:opacity-20" to="/blogs">Blogs</NavLink>
        <NavLink className="text-xl mx-4 font-bold border-base-content font-mono hover:border-b-4 hover:opacity-20" to="/about">About</NavLink>
        <NavLink className="text-xl mx-4 font-bold border-base-content font-mono hover:border-b-4 hover:opacity-20" to="/contact">Contact</NavLink>
    </>
    return (
        <section className={isSticky ? "fixed top-0 container" : "fixed top-[-1000vh] container"}>
            <section className='flex justify-between items-center py-8'>
                <div>
                    <Link to="/" className='font-pacifico font-bold text-2xl hover:text-primary hover:opacity-20'>Fahim</Link>
                </div>
                <div>
                    {navLinks}
                </div>
                <div>  <a href='mailto:samiulbasirfahim@outlook.com' className='font-pacifico font-bold text-2xl hover:text-primary hover:opacity-20'>Hire me{">"} </a></div>
            </section>
        </section>
    );
};

export default Navbar;