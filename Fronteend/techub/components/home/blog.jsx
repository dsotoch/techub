import { Box, Button, Card, CardActionArea, CardContent, LinearProgress, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export async function Blog() {
    const url = process.env.API_URL;
    const endpoint = '/Blog/treeBlogs/';
    var res = false;
    try {
        const request = await fetch(url + endpoint);
        res = await request.json();

    } catch (error) {
        console.error("Error fetching data:", error);

        res = false;

    }




    return (
        <Paper className="grid justify-items-center w-full p-2 text-center">
            <Typography className="font-semibold text-blue-800" variant="h5">
                Nuestro Blog
            </Typography>
            <Typography variant="h4" className="font-semibold mt-2">
                Revisa nuestras <span className="italic text-green-500 ">Últimas noticias</span>
            </Typography>

            <div className="md:flex grid w-full mt-5 justify-around">
                {res ? (
                    res.map((blog) => (
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
                ) : (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                        <Typography className="text-red-500 font-semibold m-3">Ups... No Tenemos Respuesta del Backend</Typography>
                    </Box>

                )}

            </div>


        </Paper>
    );
}


