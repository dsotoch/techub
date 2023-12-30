import { faBaby, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const TecHub = () => {
    return (
        <div className="grid justify-items-center">
            <Typography className="font-bold text-blue-800">
                Somos TECHUB EIRL
            </Typography>
            <div  className="grid md:flex">
                <Card className="md:w-1/2">
                    <CardContent>

                        <Typography variant="h5" className="font-semibold text-cyan-900">
                            A su disposición con más de 3 años de <span className="text-green-500  italic "> experiencia</span> en TI
                        </Typography>
                        <Typography className="text-cyan-900">
                            TECHUB posee una gama de servicios de consultoría y soluciones en tecnología de información que brindan resultados concretos para su negocio. TECHUB integra software, infraestructura tecnológica y computación en la nube que lo ayudan a alcanzar sus objetivos.
                        </Typography>
                        <Typography marginTop={3} className="text-cyan-900">
                            Soluciones innovadoras para tu negocio en:

                        </Typography>
                        <List className="grid justify-start md:flex">
                            <Card elevation={20} >
                                <CardContent className="grid">
                                    <ListItemIcon className="text-cyan-700 p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Desarrollo de software en la nube y páginas WEB
                                        </Typography>
                                    </ListItemIcon>
                                    <ListItemIcon className="text-cyan-700 p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Soporte Informático

                                        </Typography>
                                    </ListItemIcon>
                                    <ListItemIcon className="text-cyan-700 p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Asesoría TI

                                        </Typography>
                                    </ListItemIcon>

                                </CardContent>
                            </Card>
                            <Card elevation={20} className="mt-1 md:ml-1 md:mt-0 ">
                                <CardContent className="grid">
                                    <ListItemIcon className="text-cyan-700  p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Cámaras de Videovigilancia

                                        </Typography>
                                    </ListItemIcon>
                                    <ListItemIcon className="text-cyan-700 p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Computación en la nube
                                        </Typography>
                                    </ListItemIcon>
                                    <ListItemIcon className="text-cyan-700 p-2">
                                        <FontAwesomeIcon icon={faCircle} className="mr-2 text-2lg" />
                                        <Typography className="m-0 font-semibold">
                                            Administración de Servidores

                                        </Typography>
                                    </ListItemIcon>
                                </CardContent>
                            </Card>


                        </List>
                    </CardContent>
                </Card>
                <Card className="md:w-1/2 my-auto">
                    <CardContent>
                        <img src="/images/banner.webp" title="Techub"/>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}