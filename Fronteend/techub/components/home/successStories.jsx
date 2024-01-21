import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const SuccessStories = () => {
    return (

        <Paper
            className="bg-blue-600 text-white  flex justify-between w-full p-2  md:p-10 "
        >
            <Box>

                <Typography className="font-semibold">
                    Aportamos valor añadido a tu gestión

                </Typography>
                <Typography className="font-semibold md:font-normal text-2xl md:text-4xl mt-4">
                    Revisa nuestros <span className="italic" >casos de éxito</span>

                </Typography>
            </Box>
           
            <Box>

                <Link href={'#'}>
                    <Button
                        className="text-white font-semibold hover:bg-blue-900  bg-gray-800 p-4"
                    >
                        Casos de Exito
                    </Button></Link>
            </Box>
            

        </Paper>

    );
}