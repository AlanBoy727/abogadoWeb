"use client";
import {Direccion} from "@/app/components/BotonWhatsapp";
import Ubicacion from "@/app/components/Ubicacion";

export default function Inicio (){
    return(
        <div>
            <section className="relative overflow-hidden bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
                    <div className="grid gap-1 lg:grid-cols-[40%_60%] lg:items-center">
    
                        {/* Texto */}
                        <div>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                            Defensa legal estratégica para proteger lo que más importa.
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Especialistas en derecho familiar, patrimonial y mercantil en Texcoco. Atención rápida y confidencial.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="servicios"
                                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
                            >
                                Nuestros servicios
                            </a>

                            <a
                                href={Direccion()}
                                target="_blank"
                                className="rounded-xl border border-slate-600 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
                            >
                                WhatsApp inmediato
                            </a>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="relative w-full mt-4">
                            <img
                            src="/grupo-abogados.webp"
                            alt="Bufete de abogados"
                            className="rounded-3xl w-full h-full object-cover shadow-2xl"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent rounded-b-3xl"></div>

                        </div>
                    </div>
                </div>
                
            </section>

            <section className="bg-slate-950 text-white pt-14">
                <div className="mx-auto max-w-3xl text-center">
                    
                    <h2 className="text-3xl font-bold mb-6">
                        ¿Por qué elegirnos?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Nuestro compromiso es brindar asesoría jurídica clara, atención humana
                        y estrategias legales sólidas para proteger tus intereses.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto mt-8 px-6 grid gap-6 lg:grid-cols-[40%_60%]">
                    <div>
                        <span className="inline-block rounded-full border border-slate-700 px-4 py-1 text-sm font-medium text-blue-400">
                            Beneficios
                        </span>
                        

                        <ul className="space-y-4 mt-6 text-slate-300">
                            <li className="flex items-start gap-3">
                                <p className="text-green-600">
                                    ✔
                                </p>
                                <span >
                                    Atención personalizada en cada caso
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <p className="text-green-600">
                                    ✔ 
                                </p>
                                <span >
                                    Estrategias legales claras y efectivas
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <p className="text-green-600">
                                    ✔ 
                                </p>
                                <span >
                                    Respuesta rápida y seguimiento constante
                                </span>   
                            </li>
                            <li className="flex items-start gap-3">
                                <p className="text-green-600">
                                    ✔ 
                                </p>
                                <span >
                                    Confidencialidad total
                                </span>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <p className="text-green-600">
                                    ✔ 
                                </p>
                                <span >
                                    Experiencia en múltiples áreas legales
                                </span>
                            </li>
                        </ul>

                        <a
                                href="servicios"
                                className=" text-center  mt-6 my-auto block w-1/2 h-8 rounded-xl bg-blue-600 pt-1 font-semibold text-white transition hover:bg-blue-500"
                            >
                                Nuestros servicios
                        </a>
                        
                    </div>
                    

                    <div>
                    <h2 className="text-3xl font-bold mb-6">
                        Lo que dicen nuestros clientes
                    </h2>

                    <div className="space-y-6">

                    <div className="flex items-start gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                        
                        {/* Imagen */}
                        <img
                        src="/testimonio1.webp"
                        alt="Cliente"
                        className="w-12 h-12 rounded-full object-cover"
                        />

                        {/* Texto */}
                        <div>
                        <p className="text-slate-300 mb-2">
                            “Me ayudaron con mi divorcio y todo fue mucho más rápido de lo que esperaba.”
                        </p>
                        <span className="text-sm text-slate-400">
                            — Cliente satisfecho
                        </span>
                        </div>

                    </div>

                    <div className="flex items-start gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                        
                        <img
                        src="/testimonio2.webp"
                        alt="Cliente"
                        className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                        <p className="text-slate-300 mb-2">
                            “Excelente atención y siempre resolviendo mis dudas.”
                        </p>
                        <span className="text-sm text-slate-400">
                            — Cliente satisfecho
                        </span>
                        </div>

                    </div>

                    </div>
                    </div>

                </div>
                </section>




            

                        
                        
                

                <Ubicacion/>
                
        </div>
    );
}