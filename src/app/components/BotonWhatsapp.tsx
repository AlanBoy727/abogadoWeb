"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Props } from "next/script";


const phone = "525534675820"; // Cambia por tu número
const message = "Hola, podría darme informes a cerca de sus servicios jurídicos";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export function Direccion(){ return url;}

export function BotonFlotante(){
    
    return(
        <Link
        href={url}
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
        >
        
        <div className="relative items-center w-8 h-8">
            <MessageCircle className="h-8 w-8" />
            <Phone  className="absolute  top-2 right-2 h-4 w-4"/>
        </div>
        <span className="hidden sm:block font-semibold">
            Escríbenos
        </span>
        </Link>
    );

}

type props ={
    tipo: string
}

export function BotonContacto({tipo}:props){
    return(
        <div>
            <a
            href={url}
            target="_blank"
            className={tipo=="1" ?'inline-block bg-blue-700 hover:bg-blue-800 transition px-5 py-3 rounded-xl font-medium':''}
          >
            Enviar WhatsApp
            </a>

        </div>
        
    );
}