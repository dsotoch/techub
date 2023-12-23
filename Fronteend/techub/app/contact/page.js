import React from 'react';
import { Header } from './header';
import Body from './body';

const About = () => {
    return (
        <div className='container bg-white mx-auto p-2'>
            <div className='flex justify-center'>
                <Header />
            </div>
            <div className='flex justify-center'>
                <Body />
            </div>
        </div>
    );
};

export default About;