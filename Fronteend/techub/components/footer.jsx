'use client'
import Image from 'next/image';
import React, { useState } from 'react';
export function Footer() {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [mensaje, setMensaje] = useState("");
    const enviarData = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('email', formData.email);
        try {
            const request = await fetch(process.env.NEXT_PUBLIC_API_URL + '/Contacto/CrearSuscripcion', {
                method: 'POST',
                body: form,
                credentials: 'include'
            });
            if (request.ok) {
                const response = await request.json();
                setMensaje(response.mensaje);

                setTimeout(() => {
                    setMensaje("");
                    setFormData({ email: "" });
                }, 4000);
            } else {
                setTimeout(() => {
                    setMensaje("error");
                }, 4000);

            }
        } catch (error) {
            setTimeout(() => {
                setMensaje("error");
            }, 3000);
        }

    }
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-2">
                <div className="mb-10 md:mb-0">
                    {mensaje && mensaje !== "error" && <div className='p-4 bg-yellow-300 text-black'><p>{mensaje}</p> </div>}
                    {mensaje === "error" && <div className='p-4 bg-red-500'><p>Hubo un error..Intentalo Nuevamente</p> </div>}

                    <p className="text-3xl font-serif font-semibold mb-4">Mantente conectado</p>
                    <p>
                        Únete a nuestra comunidad para recibir las últimas actualizaciones,
                        ofertas exclusivas y contenido especial. Suscríbete ahora y forma parte
                        de nuestro viaje.
                    </p>
                    <form onSubmit={enviarData}>
                        <div className="flex items-center pt-1">
                            <input
                                className="border border-gray-300 p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
                                type="email"
                                placeholder="Correo Electrónico"
                                id='email'
                                name='email'
                                value={formData.email}
                                required
                                onChange={(e) => setFormData({
                                    ...formData, email: e.target.value
                                })}

                            />
                            <button
                                type="submit"
                                className="bg-red-500 p-2 rounded hover:bg-red-600 transition"
                            >
                                Suscríbete
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mb-10 md:mb-0">
                    <p className="text-3xl font-serif font-semibold mb-4">Encuéntranos en</p>
                    <p>Información de Contacto: techub@techub.com | Teléfono: (51) 916715991</p>
                    <p>Av Los Laureles, Viru, La Libertad, Perú</p>
                    <div className="flex justify-center">
                        <img src="/images/ssl.webp" alt="SSL Seal" className="w-32 h-32" />
                    </div>
                </div>

                <div className="pl-4 sm:text-center sm:mb-2">
                    <p className="text-3xl font-serif font-semibold mb-4">Aceptamos</p>
                    <img src="/images/pagos.webp" alt="Métodos de Pago"  />
                </div>
            </div>
            <hr className="border-t border-gray-700 my-4" />
            <div className="mt-4 text-center">
                <p>&copy; 2023 TecHub. Todos los Derechos Reservados.</p>
            </div>
        </footer>
    );
}
