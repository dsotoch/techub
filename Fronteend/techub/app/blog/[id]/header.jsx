import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Header = () => {
    return (
        <>
            <div className="static w-full">
                <Image src="/images/about/about.webp" alt="¿Quiénes Somos?" className=" w-full h-[250px] object-cover  brightness-50" />
            </div>
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold hover:cursor-pointer">
                <Typography variant="h2" className="hidden  md:grid">
                Nuestro Blog
                </Typography>
                <Typography variant="h5" className="md:hidden">
                Nuestro Blog
                </Typography>
            </div>
        </>


    );
};
