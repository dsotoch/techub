'use client'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Utiliza el desplazamiento suave
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={scrollToTop}
        >
            <div className="fixed bottom-4 right-4 z-50">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
