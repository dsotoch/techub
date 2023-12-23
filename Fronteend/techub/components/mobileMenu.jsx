'use client'
import React from "react";
import { Button, MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export const MobileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className=" md:hidden">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ fontSize: "2rem" }}
            >
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
               <Link  href={'/about'}><MenuItem onClick={handleClose} className="text-blue-500 font-semibold"> ¿Quiénes Somos?</MenuItem></Link>
               <Link href={''}> <MenuItem onClick={handleClose} className="text-blue-500 font-semibold"> Portafolio</MenuItem></Link>
               <Link href={''}> <MenuItem onClick={handleClose} className="text-blue-500 font-semibold">Casos de Éxito</MenuItem></Link>
               <Link href={''}> <MenuItem onClick={handleClose} className="text-blue-500 font-semibold">Blog</MenuItem></Link>
               <Link href={'/contact'}> <MenuItem onClick={handleClose} className="text-blue-500 font-semibold">Contactanos</MenuItem></Link>

            </Menu>
        </div>
    );
}