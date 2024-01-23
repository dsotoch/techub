'use client';
import { Box, Button, Card, CardActionArea, CardContent, LinearProgress, Paper, Typography } from "@mui/material";
import next from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Blog() {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const obtenerBlogs = async () => {
        const url = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = '/Blog/Blogs_all/';
        try {
            const request = await fetch(url + endpoint, {
                next: {
                    revalidate: 600
                }
            });
            const resp = await request.json();
            setRes(resp);
        } catch (error) {
            console.error("Error fetching data:", error);

        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        obtenerBlogs();
    }, []);




    if (loading) {
        return (<Box sx={{ width: '100%' }}>
            <LinearProgress />
            <Typography className="text-red-500 font-semibold m-3">Ups... No Tenemos Respuesta del Backeend</Typography>
        </Box>
        );
    } else {
        return (
            <Paper className="grid justify-items-center w-full p-2 text-center">
                <Typography className="font-semibold text-blue-800" variant="h5">
                    Nuestro Blog
                </Typography>
                <Typography variant="h4" className="font-semibold mt-2">
                    Revisa nuestras <span className="italic text-green-500 ">Últimas noticias</span>
                </Typography>

                <div className="md:flex grid w-full mt-5 justify-around">
                    {res.slice(0, 3).map((blog) => (
                        <Card className="p-4 border w-full md:w-[30%] ml-2 md:mt-0 mt-2" elevation={5} key={blog.id}>
                            <CardContent className="text-cyan-900">
                                <Typography className="font-semibold text-2xl italic my-2">{blog.titulo}</Typography>
                                <Typography className="font-semibold">{blog.subtitulo}</Typography>
                                <Typography>{blog.fecha}</Typography>
                                <Typography className="text-green-500 italic font-semibold">{blog.autor}</Typography>
                                <div className="mt-5 text-center">
                                    <Link href={`blog/${blog.id}`} className="bg-gray-900 p-3 rounded-md hover:bg-gray-500 text-white">Ver Nota Completa</Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>



            </Paper>
        );
    }


}


