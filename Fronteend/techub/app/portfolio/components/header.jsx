import React from "react";
import {Typography } from "@mui/material";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="p-4">
            <div className="static w-full">
                <img src="../images/about/about.webp" alt="¿Quiénes Somos?" className=" w-full h-[250px] object-cover  brightness-50" />
            </div>
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold hover:cursor-pointer">
                <Typography variant="h2" className="hidden  md:grid">
                Nuestro Portafolio
                </Typography>
                <Typography variant="h5" className="md:hidden">
                Nuestro Portafolio

                </Typography>
            </div>
            <div className="m-4 text-3xl font-semibold animate-fade-down animate-once">Nuestros Proyectos</div>
            <hr />
        </div>


    );
};
