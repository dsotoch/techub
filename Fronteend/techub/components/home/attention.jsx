import { Badge } from "@mui/base";
import { Avatar, Box, Icon, Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export const Attention = () => {
    return (
        <div className="text-center">
            <Typography
                className="text-blue-800 font-semibold"
                variant="h5"
            >
                Como te Atendemos
            </Typography>
            <Typography
                variant="h4"
                fontWeight={"bold"}
            >
                Nuestra <span className="italic text-green-500 font-semibold">asesoría</span> integral
            </Typography>
            <Paper className="flex flex-col md:flex-row mt-6 md:mt-6 md:m-10 items-center justify-center  mx-auto p-4 my-auto" elevation={5}>
                <Box className="w-full  md:w-1/4   mt-6 md:mt-0">
                    <Badge
                        badgeContent={<span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px', borderRadius: '50%', fontWeight: "bold" }}>01</span>}

                    >
                        <Avatar src="/images/analisis.jpg"
                            className="border-8 border-black-500 mx-auto mb-2 "
                            sx={{ width: 200, height: 150 }}

                        />
                    </Badge>
                    <Typography variant="h6" className="mt-5 text-cyan-900" fontWeight={"bold"}>
                        Analizamos entorno tecnológico
                    </Typography>
                    <Typography className="text-cyan-900">
                        Analizamos la situación actual de su plataforma tecnológica.
                    </Typography>
                </Box>
                <Box className="w-full md:w-1/4 mt-6 md:mt-0">
                    <Badge
                        badgeContent={<span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px', borderRadius: '50%', fontWeight: "bold" }}>02</span>}

                    >
                        <Avatar src="/images/mejora.webp"
                            className="border-8 border-black-500 mx-auto mb-2"
                            sx={{ width: 200, height: 150 }}

                        />
                    </Badge>
                    <Typography variant="h6" className="mt-5 text-cyan-900" fontWeight={"bold"}>
                        Identificamos mejoras
                    </Typography>
                    <Typography className="text-cyan-900">
                        Identificamos áreas de mejoras o problemas potenciales.
                    </Typography>
                </Box>
                <Box className="w-full md:w-1/4 mt-6 md:mt-0">
                    <Badge
                        badgeContent={<span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px', borderRadius: '50%', fontWeight: "bold" }}>03</span>}

                    >
                        <Avatar src="/images/asesor.webp"
                            className="border-8 border-black-500 mx-auto mb-2"
                            sx={{ width: 200, height: 150 }}

                        />
                    </Badge>
                    <Typography variant="h6" className="mt-5 text-cyan-900" fontWeight={"bold"}>
                        Te asesoramos
                    </Typography>
                    <Typography className="text-cyan-900">
                        Brindamos asesoramiento sobre nuevas tendencias en tecnología y outsourcing ti.
                    </Typography>
                </Box>
                <Box className="w-full md:w-1/4 mt-6 md:mt-0">
                    <Badge
                        badgeContent={<span style={{ backgroundColor: '#4caf50', color: 'white', padding: '4px', borderRadius: '50%', fontWeight: "bold" }}>04</span>}

                    >
                        <Avatar src="/images/resume.webp"
                            className="border-8 border-black-500 mx-auto mb-2 "
                            sx={{ width: 200, height: 150 }}

                        />
                    </Badge>
                    <Typography variant="h6" className="mt-5 text-cyan-900" fontWeight={"bold"}>
                        Informe final
                    </Typography>
                    <Typography className="text-cyan-900">
                        Contiene información que su empresa necesita para aprovechar al máximo sus recursos actuales, para concretar sus planes futuros y estrategias de negocio.
                    </Typography>
                </Box>
            </Paper>
        </div >
    );
}