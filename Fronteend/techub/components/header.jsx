import React from 'react';
import { MobileMenu } from './mobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const Header = () => {
    return (
        <header className="bg-gray-800 mb-2">
            <div className="flex justify-between p-4 text-gray-400 font-semibold"><div className='flex'> <FontAwesomeIcon icon={faLocationDot} className='mr-2 my-auto' /><span>Trujillo,La Libertad | Peru </span></div> <div className='flex'><FontAwesomeIcon icon={faEnvelope} className='mr-2 my-auto' /><span>techub@techub.com</span> </div> </div>
            <hr />
            <nav className="container flex items-center justify-between text-gray-300  ">
                <Link href='/' >
                    <img src="/images/logo_grande.png" alt="TecHub" className="mx-16 my-auto hidden md:flex pt-2 pb-2" />
                    <img src="/images/logo_pequeño.png" alt="TecHub" className="md:hidden  mx-16 my-auto pt-2 pb-2" />
                </Link>


                <ul className=" list-none space-x-5 hidden md:flex text-lg">
                    <li className="relative group cursor-pointer">
                        <span className="group-hover:uppercase font-semibold">
                            <Link href='/about' >

                                <button className="bg-transparent">¿Quiénes Somos?</button>

                            </Link>
                        </span>


                        <hr className="absolute invisible group-hover:visible top-10 w-full mt-5 border-white-500 border-t-2 group-hover:border-blue-500" />
                    </li>
                    <li className="hover:uppercase hover:cursor-pointer relative group flex items-end justify-between h-full">

                        <Link href={'/portfolio'}>
                            <span className="group-hover:uppercase font-semibold">
                                Portafolio
                            </span>
                        </Link>
                        <hr className="absolute invisible group-hover:visible top-10 w-full mt-5 border-white-500 border-t-2 group-hover:border-blue-500" />
                    </li>
                    <li className="hover:uppercase hover:cursor-pointer relative group">
                        <Link href={'/successCase'}>
                            <span className="group-hover:uppercase font-semibold">
                                Casos de Éxito
                            </span>
                        </Link>
                        <hr className="absolute invisible group-hover:visible top-10 w-full mt-5 border-white-500 border-t-2 group-hover:border-blue-500" />

                    </li>
                    <li className="hover:uppercase hover:cursor-pointer relative group">
                        <Link href={'/blog'}>
                            <span className="group-hover:uppercase font-semibold">
                                Blog
                            </span>
                        </Link>
                        <hr className="absolute invisible group-hover:visible top-10 w-full mt-5 border-white-500 border-t-2 group-hover:border-blue-500" />
                    </li>
                    <li className="hover:uppercase hover:cursor-pointer relative group ">
                        <span className="group-hover:uppercase font-semibold">
                            <Link href='/contact' >

                                <button className="bg-transparent">Contáctanos</button>

                            </Link>
                        </span>
                        <hr className="absolute invisible group-hover:visible top-10 w-full mt-5 border-white-500 border-t-2 group-hover:border-blue-500" />

                    </li>
                </ul>
                <MobileMenu />
            </nav>

        </header >
    );
};