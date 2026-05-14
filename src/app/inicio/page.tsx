"use client";
import { Direccion } from "@/app/components/BotonWhatsapp";
import Ubicacion from "@/app/components/Ubicacion";

export default function Inicio() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Texto */}
            <div className="w-full lg:w-[40%]">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Defensa legal estratégica para proteger lo que más importa.
              </h1>

              <p className="mt-6 text-base md:text-lg text-slate-300">
                Especialistas en derecho familiar, patrimonial y mercantil en Texcoco. Atención rápida y confidencial.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="servicios"
                  className="w-full sm:w-auto text-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Nuestros servicios
                </a>

                <a
                  href={Direccion()}
                  target="_blank"
                  className="w-full sm:w-auto text-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  WhatsApp inmediato
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full lg:w-[60%] mt-6 lg:mt-0">
              <img
                src="/grupo-abogados.webp"
                alt="Bufete de abogados"
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent rounded-b-3xl"></div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="bg-slate-950 text-white pt-14 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Por qué elegirnos?
          </h2>

          <p className="text-base md:text-lg text-slate-300">
            Nuestro compromiso es brindar asesoría jurídica clara, atención humana
            y estrategias legales sólidas para proteger tus intereses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-10">
          
          {/* Beneficios */}
          <div className="w-full lg:w-[40%]">
            <span className="inline-block rounded-full border border-slate-700 px-4 py-1 text-sm text-blue-400">
              Beneficios
            </span>

            <ul className="space-y-4 mt-6 text-slate-300">
              {[
                "Atención personalizada en cada caso",
                "Estrategias legales claras y efectivas",
                "Respuesta rápida y seguimiento constante",
                "Confidencialidad total",
                "Experiencia en múltiples áreas legales",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="servicios"
              className="mt-6 block w-full sm:w-auto text-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Nuestros servicios
            </a>
          </div>

          {/* Testimonios */}
          <div className="w-full lg:w-[60%]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Lo que dicen nuestros clientes
            </h2>

            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800"
                >
                  <img
                    src={`/testimonio${i}.webp`}
                    alt="Cliente"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-slate-300 mb-2">
                      {i === 1
                        ? "“Me ayudaron con mi divorcio y todo fue mucho más rápido de lo que esperaba.”"
                        : "“Excelente atención y siempre resolviendo mis dudas.”"}
                    </p>
                    <span className="text-sm text-slate-400">
                      — Cliente satisfecho
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Ubicacion />
    </div>
  );
}