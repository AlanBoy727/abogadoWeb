type MapaProps = {
  url: string;
  titulo?: string;
};

export default function Mapa({
  url,
  titulo = "Ubicación en Google Maps",
}: MapaProps) {
  return (
    <section className="w-full mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900">
          {titulo}
        </h2>

        <p className="mt-2 text-white text-center w-full">
          Encuéntranos fácilmente con el mapa interactivo.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
        <iframe
          src={url}
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </section>
  );
}