import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, ImageList, ImageListItem, Slider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
]
function Brands() {
    // Utiliza map para recorrer el array y renderizar cada elemento
    const cards = itemData.map((element, index) => (

        <ImageListItem key={index} >
            <Image
                srcSet={`${element.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${element.img}?w=164&h=164&fit=crop&auto=format`}
                alt={element.title}
                loading="lazy"
            />
        </ImageListItem>
    ));

    return (

        < div >
            <ImageList cols={6} rowHeight={164} className="hidden md:flex">
                {cards}
            </ImageList>
            <ImageList cols={3} rowHeight={164} className="md:hidden ">
                {cards}
            </ImageList>
        </div >

    );

}
export const Clients = () => {
    return (
        <Box>
            <div className="grid justify-center">
                <Typography variant="h5" className="font-semibold mt-7 mb-3 text-blue-800 mx-auto ">
                    Nuestros Clientes
                </Typography>
                <FontAwesomeIcon icon={faCircleDown} className="text-4xl mx-auto mb-5 animate-bounce" />
            </div>
            <div className="grid justify-between md:flex">
                <Brands />
            </div>
        </Box>
    );
};

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

