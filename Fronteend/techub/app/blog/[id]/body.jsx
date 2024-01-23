'use client';
import { CardActions, Card, CardContent, Paper, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Body = ({ id }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState([]);
    const filename = process.env.NEXT_PUBLIC_API_URL + '/Blog/getImagen/' + id;
    const obtenerBlog = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/Blog/getBlog/' + id;
            const response = await fetch(apiUrl, {
                next: {
                    revalidate: 60
                }
            });
            const blogs = await response.json();
            setBlog(blogs);
        } catch (error) {
            console.error('Error al obtener blog:', error);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        obtenerBlog();
    }, [id]);


    if (loading) {
        return (
            <div><CircularProgress /></div>
        );
    } else {
        return (
            <Paper className="grid w-full p-4">
                <Typography className="text-green-500 text-3xl m-2 italic">Somos TecHub</Typography>
                <Typography className="ml-2 mb-2 text-cyan-900 font-semibold">Más de 3 años en TI</Typography>
                <hr />
                <div className="p-2">
                    <div className="w-full m-2 p-2">
                        <Typography variant="h4" className="text-cyan-900">{blog.blog.titulo}</Typography>
                        <Typography className="text-2xl font-semibold italic">{blog.blog.subtitulo}</Typography>
                        <Typography className="mt-2 text-cyan-900 text-justify">{blog.blog.descripcion}</Typography>
                        <div className="w-full border p-2 m-2">

                            <img src={`${filename}`} alt="" srcSet="" title={blog.blog.titulo} className="object-cover w-full" />
                        </div>
                        < div className="mt-5 text-center">
                            {blog.blog.link != null && (
                                <a href={"https://" + blog.blog.link} className="p-3 m-2 bg-blue-600 hover:bg-blue-400 text-white" target="_blank" title={blog.blog.titulo} rel="noopener noreferrer">
                                    Ir A {blog.blog.titulo}
                                </a>
                            )}
                        </div>
                    </div>



                </div>
            </Paper>
        );
    }


};
