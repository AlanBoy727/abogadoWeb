import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";
import {BotonContacto} from "@/app/components/BotonWhatsapp";
import Image from "next/image";


export default function Footer() {
  return (
    
    <footer className=" bg-zinc-950 text-white">
        {/*bg-slate-950 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-4">
                <Image
                    src="/torre-abogado.png"
                    alt="Bufete Ortega"
                    width={60}
                    height={60}
                />
            

            <div>
              <h3 className="font-bold text-lg">Bufete Ortega</h3>
              <p className="text-sm text-slate-400">
                Asesoría Jurídica Profesional
              </p>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">
            Despacho jurídico en Texcoco especializado en derecho penal,
            civil y familiar. Atención personalizada y soluciones legales
            efectivas.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navegación</h4>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-white transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-white transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contacto</h4>

          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5" />
              <span>Texcoco, Estado de México</span>
            </li>

            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5" />
              <span>+52 55 1234 5678</span>
            </li>

            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5" />
              <span>contacto@bufeteortega.com</span>
            </li>

            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5" />
              <span>Lun - Vie | 9:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Consulta Inmediata
          </h4>

          <p className="text-sm text-slate-400 mb-5 leading-relaxed">
            Recibe atención jurídica rápida y personalizada vía WhatsApp.
          </p>

          <BotonContacto tipo="1" />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Bufete Ortega. Todos los derechos
            reservados.
          </p>

          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-white transition">
              Privacidad
            </Link>

            <Link href="/terminos" className="hover:text-white transition">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}