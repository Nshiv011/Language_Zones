import React from 'react';

// import Home from './Home';
import Hero from './Hero'
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import AboutL from './AboutL';
import Footer from './Footer';
import Course from './Course';
import Course2 from './Course2';
import About from './About';
import Country from './Country';
import Exclusive from './Exclusive';
import { Switch ,Route,Redirect } from 'react-router';

const Home=()=>{
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <Hero/>
        <Course/>
        <Course2/>
        <About/>
        <Country/>
        <Exclusive/>
        
        <Footer/>
        </>
    );
};
export default Home;