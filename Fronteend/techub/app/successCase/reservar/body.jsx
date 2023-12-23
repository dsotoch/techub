import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
export const Body = () => {
    return (
        <div className="grid md:flex flex-wrap mb-4">
            <div className="w-full md:w-1/2">
                <Card sx={{ minWidth: 300, flexGrow: 1,marginRight:2 }}>
                    <CardContent className="text-center">
                        <Typography className="font-semibold text-2xl text-cyan-900 mx-4 mt-2 mb-4">
                            Testimonio de Reservar.pe
                            </Typography>
                        
                        <video
                            controls
                            playsInline
                            loop
                            poster="https://assets.codepen.io/6093409/river.jpg"
                        >
                            <source
                                src="https://assets.codepen.io/6093409/river.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </CardContent>
                </Card>
            </div>
            <div className="border w-full md:w-1/2 text-cyan-900 p-4">
                <Typography className="font-semibold text-2xl m-2">
                    Información del proyecto
                </Typography>
                <Typography className="font-semibold  m-2">
                    Automatización de Pagos con Yape para Optimizar la Experiencia del Cliente y Potenciar las Ventas en Reservar.pe
                </Typography>
                <Typography className="m-2">
                    En un esfuerzo continuo por ofrecer servicios de alta calidad y una experiencia de usuario excepcional,
                    Reservar.pe ha implementado con éxito la automatización de pagos mediante Yape.
                    Este proyecto ha revolucionado la forma en que sus clientes realizan reservas y completan transacciones,
                    proporcionando una solución rápida, segura y fácil de usar.
                </Typography>
                <Typography className="font-semibold m-2">
                    Características Clave:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>
                            <span className="font-semibold">Experiencia sin Esfuerzo:</span> Gracias a la integración de Yape, los clientes de Reservar.pe disfrutan de un proceso de pago sin complicaciones. La interfaz intuitiva de Yape garantiza una experiencia fluida desde la selección de servicios hasta la finalización de la transacción.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <span className="font-semibold">Eficiencia Operativa:</span> La automatización de los pagos ha eliminado los procesos manuales, ahorrando tiempo tanto para sus clientes como para su equipo. Esto ha llevado a una mejora significativa en la eficiencia operativa de Reservar.pe.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <span className="font-semibold">Seguridad y Tranquilidad:</span> La reputación de Yape por ofrecer un entorno de pago seguro se traduce en tranquilidad para sus clientes.
                            La seguridad de las transacciones es una prioridad, y la integración con Yape refuerza nuestro compromiso con la protección de la información financiera de
                            sus usuarios.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <span className="font-semibold">Resultados Positivos:</span> Desde la implementación, hemos observado un aumento en la satisfacción del cliente,
                            respaldado por la rapidez y comodidad en el proceso de pago. Esta mejora se ha traducido directamente en un aumento de las conversiones y,
                            en última instancia, en un crecimiento de las ventas.
                        </ListItemText>
                    </ListItem>
                </List>

            </div >
            <div className="w-full bg-blue-500 text-white p-4">
                <Typography className="font-semibold m-2">
                    Resultados Logrados:
                </Typography>

                <List className="m-2 " >
                    <ListItem>
                        <ListItemIcon className="text-2xl my-auto text-white" >
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </ListItemIcon>
                        <ListItemText className="my-auto">
                            Mayor satisfacción del cliente.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className="text-2xl my-auto text-white">
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </ListItemIcon>
                        <ListItemText className="my-auto">
                            Procesos operativos más eficientes.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className="text-2xl my-auto text-white">
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </ListItemIcon>
                        <ListItemText className="my-auto">
                            Consolidación de Reservar.pe como una plataforma líder en reservas online.
                        </ListItemText>
                    </ListItem>
                </List>
                <Typography className="m-2 text-justify">
                    La exitosa implementación de la automatización de pagos con Yape en Reservar.pe
                    demuestra nuestro compromiso continuo con la innovación y la mejora constante.
                    Este proyecto no solo ha optimizado sus operaciones,
                    sino que también ha fortalecido su posición como líderes en el sector de reservas online.
                    Estamos emocionados por los resultados obtenidos y comprometidos a seguir proporcionando servicios de calidad superior a nuestros clientes.

                </Typography>
            </div>

        </div >
    );
}