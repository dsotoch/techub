import { Card, CardContent, Paper, Typography, CircularProgress, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
export async function Body() {
    const apiUrl = process.env.API_URL || 'http://localhost:8080';
    const endpoint = 'Blog';
    const response = await fetch(apiUrl + '/' + endpoint);
    const res = await response.json();
    return (
        <Paper className="grid w-full md:p-4 p-2">
            <Typography className="text-green-500 text-3xl m-2 italic">Somos TecHub</Typography>
            <Typography className="ml-2 mb-2 text-cyan-900 font-semibold">Más de 3 años en TI</Typography>
            <div className="md:flex grid w-full justify-around">
                {res.map((blog) => (
                    <Card className="p-4 border w-full md:w-[30%] ml-2 md:mt-0 mt-2" elevation={5} key={blog.id}>
                        <CardContent className=" text-cyan-900">
                            <Typography className="font-semibold text-2xl italic my-2">{blog.titulo}</Typography>
                            <Typography className="font-semibold">{blog.subtitulo}</Typography>
                            <Typography>{blog.fecha}</Typography>
                            <Typography className="text-green-500 italic font-semibold">{blog.autor}</Typography>
                            <div className="mt-5 text-center">
                                <Link href={`blog/${blog.id}`} className="bg-gray-900 p-3 rounded-md hover:bg-gray-500 text-white">Ver Nota Completa</Link>
                            </div>
                        </CardContent>
                    </Card>
                ))
                }
            </div>

        </Paper>
    );
}
