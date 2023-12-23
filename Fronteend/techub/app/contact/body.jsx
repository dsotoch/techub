import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import React from "react";
import { SetContact } from "./setContact";

export default function EnterpriseData() {

    const phone_number = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const enterprise_email = process.env.NEXT_PUBLIC_ENTERPRISE_EMAIL;
    return (
        <div className="container grid md:flex justify-between bg-gray-100 mt-5 mb-10">
            <div className="grid p-6 bg-white md:w-1/2">
                <Typography variant="h4" className="text-gray-900 font-semibold">
                    Encuentranos en
                </Typography>
                <div className="flex my-auto mt-4" >
                    <FontAwesomeIcon icon={faPhone} className="text-3xl m-4" />
                    <Typography>{phone_number}</Typography>
                </div>
                <hr />
                <div className="flex my-auto mt-4">
                    <FontAwesomeIcon icon={faMailBulk} className="text-3xl m-4" />
                    <Typography>{enterprise_email}</Typography>
                </div>
                <hr />
            </div>
            <div className="p-6 ml-2 md:w-1/2">
                <Typography variant="h4" className="text-gray-900 font-semibold">
                    Envianos un Mensaje
                </Typography>
                <SetContact/>
            </div>
        </div>
    );
}
