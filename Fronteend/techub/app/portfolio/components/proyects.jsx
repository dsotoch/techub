import Image from "next/image";
import React from "react";
export const Proyects = () => {
    const urlbodegest=process.env['BODEGEST_URL'];
    return (
        <div className="md:grid  gap-4 p-4">
            <div className="column shadow-md shadow-indigo-500 p-4 text-cyan-900 animate-fade-down">
                <div className="flex ">
                    <div className="my-auto animate-rotate-y animate-twice">
                        <h2 className="text-center text-2xl font-semibold mb-2">BODE<span className="italic text-green-500 text-2xl font-semibold">GEST</span></h2>
                    </div>
                    <div className="my-auto animate-rotate-y animate-twice">
                        <img src="../images/portfolio/bodegest.png" alt="Bodegest|Gestión para tu Bodega" title="Bodegest|Gestión para tu Bodega" />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="animate-fade-down animate-twice">
                    <p className="text-justify">Bodegest es una solución integral diseñada para <span className="italic text-xl text-green-500">optimizar y simplificar la gestión de ventas y compras</span> en tu empresa. Con un enfoque centrado en la eficiencia y la precisión, Bodegest facilita el control total sobre tus procesos comerciales.</p>
                    <p className="text-justify">Gestiona tus inventarios de manera intuitiva, realiza seguimientos detallados de las transacciones de ventas y compras, y agiliza la facturación electrónica con Bodegest. La plataforma ofrece una interfaz amigable que permite a los usuarios navegar fácilmente a través de las funciones clave, desde la creación de cotizaciones hasta la emisión de facturas electrónicas.</p>
                    <p className="text-justify">Además, Bodegest va más allá al ofrecer la capacidad de realizar balances económicos. Con esta funcionalidad,
                        podrás obtener una visión completa y detallada del estado financiero de tu empresa. Los balances económicos proporcionan información esencial para la toma de decisiones estratégicas, ayudándote a comprender mejor la salud financiera de tu negocio.</p>
                    <p className="text-justify">
                        Descubre una gestión empresarial más eficiente y precisa con Bodegest.
                    </p>
                </div>
                <br />
                <a href={urlbodegest} target="_blank" rel="noopener noreferrer" className="cursor-pointer"><button className="bg-blue-700 text-white p-4 rounded-md transition ease-in-out delay-150 hover:bg-blue-500 hover:scale-110">Más Información</button>
                </a>
            </div>

        </div>

    );
}