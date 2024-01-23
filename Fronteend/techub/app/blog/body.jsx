'use client';
import { Card, CardContent, Paper, Typography, Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Body() {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const response = await fetch("/api/blog");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDataFromApi();
    }, []);

    if (loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                                <Link href={`blog/${blog.id}`} passHref>
                                    <Button variant="contained" color="primary" className="bg-blue-600 hover:bg-blue-400">Ver Nota Completa</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Paper>
    );
}