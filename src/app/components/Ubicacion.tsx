import Mapa from "@/app/components/Mapa";

export default function Ubicacion() {
  return (
    <section className="bg-slate-950 py-20 px-5 text-white">
        <div className="mx-auto max-w-7xl  px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[45%_55%] lg:items-center">

            {/* Columna izquierda */}
                <div>
                    <span className="inline-block rounded-full border border-slate-700 px-4 py-1 text-sm font-medium text-blue-400">
                    Atención presencial
                    </span>

                    <h2 className="mt-5  font-bold tracking-tight sm:text-4xl">
                    Recibe una asesoría legal personalizada en nuestras oficinas
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                    Agenda una cita y permite que revisemos tu caso de manera
                    detallada. Una atención presencial nos permite entender tu
                    situación, analizar documentos y proponerte la mejor estrategia legal.
                    </p>

                    <div className="mt-8 space-y-4 text-slate-300">
                    <div className="flex gap-3">
                        <span className="text-blue-400">✔</span>
                        <p>Evaluación profesional de tu asunto legal</p>
                    </div>

                    <div className="flex gap-3">
                        <span className="text-blue-400">✔</span>
                        <p>Revisión de documentos y evidencias</p>
                    </div>

                    <div className="flex gap-3">
                        <span className="text-blue-400">✔</span>
                        <p>Estrategia clara y opciones reales</p>
                    </div>

                    <div className="flex gap-3">
                        <span className="text-blue-400">✔</span>
                        <p>Atención cercana y confidencial</p>
                    </div>
                    </div>

                    
                </div>

            {/* Columna derecha */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                <Mapa url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7521.356699967002!2d-98.88229087725149!3d19.512469527455135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e76ef93afea1%3A0x3f026f6e04d8b748!2s%E2%9C%85%E2%9A%96%EF%B8%8FAxtrea%20Especialistas%20Legales.%20Abogados%20en%20Texcoco.%20Divorcios%2C%20pensiones%20alimenticias%2C%20contratos%2C%20problemas%20propiedades.!5e0!3m2!1ses-419!2smx!4v1777327351768!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'/>
            </div>
            </div>
        </div>
        <div className="mt-10  flex flex-col gap-4 sm:flex-row">
                    <a
                        href="/contacto"
                        className="mx-auto rounded-xl border border-slate-700 hover:bg-slate-800 px-6 py-4 font-semibold text-white transition hover:bg-slate-900 text-center"
                    >
                        Ver contacto
                    </a>
                </div>
    </section>
  );
}