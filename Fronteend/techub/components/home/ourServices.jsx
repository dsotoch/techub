'use client'
import Carousel from 'react-material-ui-carousel'
import {  Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";
import { blue} from "@mui/material/colors";
import React from "react";
import Image from 'next/image';
export const OurServices = () => {
    return (
        <>
            <div className="text-center">
                <Typography className="text-blue-800 font-semibold" variant="h5">Nuestros Servicios</Typography>
                <Typography variant="h4" className="md:ml-20 md:mr-20 mt-5 font-semibold">
                    Ofrecemos y gestionamos el <span className="italic text-green-500 font-semibold">nivel de atención y respuesta  </span>que su negocio requiere
                </Typography>
                <Swiper />
            </div>
            <div>
            </div>
        </>
    );
}
const Swiper = () => {
    const data = [
        {
            imgSrc: "/images/TI.jpg", title: "Asesoria TI", description: "Brindamos todo tipo de asesoría integral de gestión de TI según las prioridades de su organización."
        },
        {
            imgSrc: "/images/software.webp", title: "Software", description: "Diseñamos soluciones que generen valor a sus procesos de negocios, a través de nuestra fábrica de software."
        },
        {
            imgSrc: "/images/nube.webp", title: "Computación en la Nube", description: "Facilitamos la infraestructura tecnológica para nuestros clientes en la nube, incluimos aplicaciones completas, servidores y unidades de almacenamiento."
        },
        {
            imgSrc: "/images/servidor.webp", title: "Administración de Servidores(RedHat,Centos)", description: "Como administradores de servidores en entornos Red Hat y CentOS, nuestras responsabilidades abarcan la configuración, seguridad y mantenimiento de servidores Linux. Nos encargamos de instalar y actualizar el sistema operativo, gestionar la seguridad, administrar usuarios, monitorear el rendimiento y proporcionar soporte técnico. Nuestro objetivo principal es asegurar la estabilidad, seguridad y eficiencia del entorno de los servidores que administramos."
        },
        {
            imgSrc: "/images/saas.webp", title: "Software como Servicio (SaaS)", description: "Como equipo, optamos por utilizar soluciones SaaS para acceder a aplicaciones a través de la web. Este modelo nos permite aprovechar funciones y datos sin la carga de instalaciones y mantenimiento local."
        },
        {
            imgSrc: "/images/licencia.webp", title: "Licencias de Software", description: "Como equipo, gestionamos cuidadosamente nuestras licencias de software para asegurar la legalidad y eficiencia en el uso de aplicaciones y programas."
        }
    ];

    return (
        <Carousel>
            {
                data.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>

    );
    function Item(props) {
        return (
            <Paper className="w-full grid justify-items-center">
                <Card
                    elevation={15}
                    sx={{ maxWidth: 500 }}
                >
                    <CardActionArea >
                        <Image src={props.item.imgSrc} alt={props.item.title} width={200} height={150} className="mx-auto pt-5 w-1/2" />
                        <CardContent>
                            <Typography variant="h5" color={blue[800]} marginBottom={3} fontWeight={"bold"} className="text-cyan-900">
                                *{props.item.title}*
                            </Typography>
                            <Typography className="text-cyan-900">
                                {props.item.description}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        )
    }
}
