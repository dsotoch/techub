import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedhat } from '@fortawesome/free-brands-svg-icons';
import { faKey, faMicrochip } from '@fortawesome/free-solid-svg-icons';
const Informaticos = () => {
    return (
        <Box >
            <Card elevation={24} className='bg-blue-800 text-white' square>
                <CardContent className='flex '>
                    <FontAwesomeIcon icon={faMicrochip} className='mr-2 my-auto text-4xl' />
                    <Typography className='font-bold' variant="h6">
                        Servicios Informaticos
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    );
};
const Soporte = () => {
    return (
        <Box >
            <Card elevation={24} className='bg-white text-black' square>
                <CardContent className='flex'>
                    <FontAwesomeIcon icon={faRedhat} className='text-4xl mr-2 my-auto' />
                    <Typography className='font-bold' variant="h6">
                        Soporte De VPS & Servidores
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    );
};
const Expertos = () => {
    return (
        <Box >
            <Card elevation={24} className='bg-blue-800 text-white' square>
                <CardContent className='flex'>
                <FontAwesomeIcon icon={faKey}  className='my-auto mr-2 text-4xl' />
                    <Typography className='font-bold' variant="h6">
                        Licencias Originales
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    );
};
export const Services = () => {
    return (
        <div className="container mx-auto grid justify-center md:flex">
            <div className="max-w-1/3"><  Informaticos /></div>
            <div className="max-w-1/3 "><  Soporte /></div>
            <div className="max-w-1/3 "><  Expertos /></div>
        </div>
    );
};