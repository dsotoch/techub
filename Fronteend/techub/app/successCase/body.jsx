import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardActionArea, CardContent } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Video } from "./reservar/components/video";
import { Card } from "@mui/joy";
import Image from "next/image";

export function Body() {
    return (
        <div className="grid p-4 m-2 justify-items-center">
            <div className="md:w-1/2 group ">
                <Card >
                    <CardActionArea className="bg-gray-900 p-5 w-full grid justify-items-center relative group-hover:h-[150px] group-hover:mb-2">
                        <div className="group-hover:opacity-20 flex justify-center">
                            <Image src="/images/successCase/reservarpe.webp" alt="" className="w-full md:w-1/2" />
                        </div>
                        <div className="absolute group-hover:top-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex">
                            <Link href={'/successCase/reservar'}
                                className="bg-blue-800 text-center p-4 w-[60px] text-white m-1 rounded-sm hover:bg-transparent hover:border" title="Ver Detalles del Proyecto">
                                <FontAwesomeIcon icon={faEye} className="text-3xl" />
                            </Link>
                        </div>
                    </CardActionArea>
                    <div className=" opacity-0 group-hover:opacity-100 text-center">
                        <Video />
                    </div>
                </Card>

            </div>

        </div>


    );
}
