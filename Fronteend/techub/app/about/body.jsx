'use client'
import { faFileWaveform, faPeopleArrows, faProjectDiagram, faServer, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, LinearProgress, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
export const Body = () => {
    return (
        <div>
            <div className="grid md:flex mt-6">
                <div className="md:w-[70%] ">
                    <Typography className="text-blue-800 font-semibold">
                        Acerca de Nosotros
                    </Typography>
                    <Typography variant="h4" className="mt-4 mb-4">
                        Conectando <span className="italic text-green-600">empresas</span>

                    </Typography>
                    <Typography className="text-cyan-900 font-medium justify-start" >
                        Somos una compañía peruana con más de 3 años de experiencia brindando consultoría en proyectos de desarrollo de software y soporte informático para los sectores Minería e Industria, Gobierno, Comercial y Servicios. Contamos con un selecto portafolio de soluciones y servicios de outsourcing de soporte técnico de TI enfocados en la transformación digital que convergen con tecnologías de software ERP, computación en la nube, infraestructura tecnológica, herramientas de colaboración y que nos permiten transformar y optimizar los procesos de negocio de nuestros clientes.
                    </Typography>
                    <List className="text-cyan-900  justify-start" >
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" /> Pasión, para comprometerse responsablemente.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" /> Compromiso, con nuestros clientes siempre.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" /> Profesionalismo, aplicación de metodología y buenas prácticas.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" />  Innovación, para enfrentar el cambio acelerado.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" />  Creatividad, para renovarse y crear nuevas soluciones.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" />  Integridad, siempre lo que dice, lo hace en la práctica.

                        </ListItem>
                        <ListItem>
                            <FontAwesomeIcon icon={faSquareCheck} className="mr-3 text-2xl" /> Responsabilidad ambiental, soluciones orientadas a la protección del medio ambiente (Green TI).

                        </ListItem>
                    </List>
                </div>
                <div className="md:w-[30%]  inline w-full  p-4">
                    <Image 
                        src="/images/about/server.webp"
                        alt="Server Image"
                        className="md:border md:rounded-md  w-full h-[550px] p-4  md:object-fill object-contain mt-10"
                    />
                </div>
            </div>
            <Bet />
            <Analysis />
        </div>
    );
}


const Bet = () => {
    return (
        <Paper className="grid md:flex mt-5   bg-gray-100" elevation={5}>
            <div className="md:w-1/2 p-4 mt-5  relative">
                <Image src="/images/about/people.webp" alt="TecHub tu mejor Aliado en TI" srcSet="" />
                <div className="absolute md:top-1/2 top-1/2  md:left-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="p-6 bg-blue-800 text-white text-center">
                        <Typography className="font-semibold text-2xl">3 <span className="italic text-2xl">Años</span></Typography>
                        <Typography className="font-semibold">de Experiencia En TI</Typography>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 justify-end p-4">
                <Typography className="text-blue-800 font-semibold ml-4">
                    Acerca de Nosotros
                </Typography>
                <Typography variant="h4" className="m-4">
                    La Apuesta <span className="italic text-green-600">de TECHUB</span>

                </Typography>
                <Typography className="text-gray-900 font-medium m-4">
                    <span className="font-bold">Nuestra Misión:</span> En TECHUB, nos dedicamos a la implementación y desarrollo de software empresarial, así como a la prestación de servicios profesionales destinados a gestionar de manera eficiente las cambiantes necesidades del entorno empresarial. Buscamos destacar por la calidad y la integración de soluciones estratégicas en tecnologías de la información, aportando un valor máximo que impulse el logro de los objetivos comerciales de nuestros clientes.
                </Typography>
                <Typography className="text-gray-900 font-medium m-4">
                    <span className="font-bold"> Nuestra Visión:</span> Aspiramos a que TECHUB sea reconocido como el líder destacado en América Latina en la integración de soluciones estratégicas de TI, abarcando tanto el software como la infraestructura tecnológica. Nos esforzamos por generar valor para los negocios, permitiéndoles adaptarse con facilidad, rapidez y rentabilidad a los cambios del entorno empresarial. Queremos ser la opción preferida que facilita a las empresas su evolución y prosperidad en un mundo tecnológicamente dinámico.
                </Typography>
                <Typography className="m-4 font-medium text-gray-900">
                    Nuestro Portafolio de Soluciones y Servicios se basa en:
                </Typography>
                <PortFolio />
            </div>
        </Paper>
    );
}

const PortFolio = () => {

    return (<div className="mt-4">
        <Typography className="m-4 font-semibold text-gray-900">
            Fábrica de Software
        </Typography>
        <LinearWithValueLabel />
        <Typography className="m-4 font-semibold text-gray-900">
            Infraestructura Tecnológica
        </Typography>
        <LinearWithValueLabel />
        <Typography className="m-4 font-semibold text-gray-900">
            Computación en la Nube
        </Typography>
        <LinearWithValueLabel />
        <Typography className="m-4 font-semibold text-gray-900">
            Soluciones de Software

        </Typography>
        <LinearWithValueLabel />
    </div>
    );
}

function LinearProgressWithLabel(props) {
    const limitedValue = Math.min(props.value, 95);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', margin: 2 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={limitedValue} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    limitedValue,
                )}%`}</Typography>
            </Box>
        </Box>
    );

}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};
function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 95 ? 95 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };


    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );

}

const Analysis = () => {
    return (
        <Paper sx={{ backgroundColor: "ButtonHighlight", marginTop: 3 }}>
            <div className="grid md:flex justify-items-center md:justify-between p-10">
                <Card className="bg-gradient-to-r from-blue-600 to-black text-white font-bold w-full md:w-1/4 m-2">
                    <CardContent className="grid items-center justify-items-center text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-black w-1/2 h-auto text-center p-4 text-white font-bold  rounded-md border border-black">
                            <FontAwesomeIcon icon={faFileWaveform} className="text-3xl" />
                        </div>
                        <Typography className=" mt-2 text-3xl animate-bounce duration-300">
                            70
                        </Typography>
                        <Typography className=" mt-2 font-bold">
                            Proyectos Completados
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-blue-600 to-black text-white font-bold  w-full  md:w-1/4 m-2">
                    <CardContent className="grid items-center justify-items-center text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-black w-1/2 h-auto text-center p-4 text-white font-bold  rounded-md border border-black">
                            <FontAwesomeIcon icon={faPeopleArrows} className="text-3xl" />
                        </div>
                        <Typography className=" mt-2 text-3xl animate-bounce duration-300 ">
                            65
                        </Typography>
                        <Typography className=" mt-2 font-bold">
                            Clientes Satisfechos
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-blue-600 to-black text-white font-bold  w-full  md:w-1/4 m-2">
                    <CardContent className="grid items-center justify-items-center text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-black w-1/2 h-auto text-center p-4 text-white font-bold  rounded-md border border-black">
                            <FontAwesomeIcon icon={faUncharted} className="text-3xl" />
                        </div>
                        <Typography className=" mt-2 text-3xl animate-bounce duration-300">
                            60
                        </Typography>
                        <Typography className=" mt-2 font-bold">
                            Proyectos de Software
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-blue-600 to-black text-white font-bold  w-full  md:w-1/4 m-2">
                    <CardContent className="grid items-center justify-items-center text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-black w-1/2 h-auto text-center p-4 text-white font-bold  rounded-md border border-black">
                            <FontAwesomeIcon icon={faServer} className="text-3xl" />
                        </div>
                        <Typography className=" mt-2 text-3xl animate-bounce duration-300">
                            35
                        </Typography>
                        <Typography className=" mt-2 font-bold">
                            Proyectos de Infraestructura
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Paper>

    );
}