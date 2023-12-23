'use client'
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Card, CardContent } from '@mui/material';

export function Video() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='mt-4'>
            <Button variant="solid" title='Ver Video' className='bg-blue-800  text-white' onClick={() => setOpen(true)}>
                Ver Testimonio
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Testimonio de Reservar.pe
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        <div className="w-full">
                            <Card sx={{ minWidth: 300, flexGrow: 1, marginRight: 2 }}>
                                <CardContent className="text-center">

                                    <video
                                        controls
                                        playsInline
                                        loop
                                        poster="https://assets.codepen.io/6093409/river.jpg"
                                    >
                                        <source
                                            src="https://assets.codepen.io/6093409/river.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </CardContent>
                            </Card>
                        </div>
                    </Typography>
                </Sheet>
            </Modal>
        </div>
    );
}