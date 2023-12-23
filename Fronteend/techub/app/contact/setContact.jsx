'use client'
import React, { useState } from "react";

export const SetContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        mensaje: "",
    });
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('mensaje',formData.mensaje);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/Contact/setContact', {
                method: 'POST',
                body: form,
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                setMensaje(data.message);

                setTimeout(() => {
                    setMensaje("");
                    setFormData({ name: "", email: "", phone: "", mensaje: "" });
                }, 3000);
            } else {
                setMensaje('Hubo un problema al procesar la solicitud.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setMensaje('Hubo un error al enviar la solicitud.');
        }
    };

    return (
        <div>
            {mensaje && <p className="m-2 p-4 bg-yellow-300 font-semibold animate-bounce">{mensaje}</p>}
            <form id="form-contact" onSubmit={handleSubmit}>
                {/* ... Resto del código del formulario ... */}
                {/* Input para 'name' */}
                <div className="m-2 grid">
                    <label htmlFor="name" className="font-semibold">
                        Nombres
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-4  rounded-sm"
                        required
                    />
                </div>
                {/* Input para 'email' */}
                <div className="m-2 grid">
                    <label htmlFor="email" className="font-semibold">
                        Correo Electronico
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="p-4  rounded-sm"
                        required
                    />
                </div>
                {/* Input para 'phone' */}
                <div className="m-2 grid">
                    <label htmlFor="phone" className="font-semibold">
                        Numero Telefonico (Incluido Codigo de Pais)
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="p-4  rounded-sm"
                        required
                    />
                </div>
                {/* Input para 'mensaje' */}
                <div className="m-2 grid">
                    <label htmlFor="mensaje" className="font-semibold">
                        Mensaje
                    </label>
                    <textarea
                        rows={4}
                        type="text"
                        name="mensaje"
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="p-4  rounded-sm"
                        required
                    ></textarea>
                </div>
                {/* Botón de enviar */}
                <button
                    type="submit"
                    className="mt-6 w-1/4 bg-gray-800 text-white font-semibold p-3 rounded-sm hover:bg-gray-400"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
