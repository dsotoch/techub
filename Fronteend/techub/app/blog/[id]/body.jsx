import { CardActions, Card, CardContent, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Body = async ({ id }) => {

    const request = await fetch(process.env.API_URL + '/Blog/getBlog/' + id);
    const response = await request.json();
    const blog = response.blog;
    return (
        <Paper className="grid w-full p-4">
            <Typography className="text-green-500 text-3xl m-2 italic">Somos TecHub</Typography>
            <Typography className="ml-2 mb-2 text-cyan-900 font-semibold">Más de 3 años en TI</Typography>
            <hr />
            <div className="p-2">
                <div className="w-full m-2 p-2">
                    <Typography variant="h4" className="text-cyan-900">{blog.titulo}</Typography>
                    <Typography className="text-2xl font-semibold italic">{blog.subtitulo}</Typography>
                    <Typography className="mt-2 text-cyan-900 text-justify">{blog.descripcion}</Typography>
                    <div className="w-full border p-2 m-2">
                        <Image src={`${process.env.API_URL}${blog.imagen}`} alt="" srcSet="" title={blog.titulo} className="object-cover w-full" />
                    </div>
                    < div className="mt-5 text-center">
                        {blog.link != null && (
                            <a href={blog.link} className="p-3 m-2 bg-blue-600 hover:bg-blue-400 text-white" target="_blank" title={blog.titulo} rel="noopener noreferrer">
                                Ir A {blog.titulo}
                            </a>
                        )}
                    </div>
                </div>



            </div>
        </Paper>
    );
};
