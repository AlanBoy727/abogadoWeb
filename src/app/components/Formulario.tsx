"use client";

import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const subject = encodeURIComponent(form.asunto);

    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\n` +
      `Correo: ${form.email}\n` +
      `Teléfono: ${form.telefono}\n\n` +
      `Mensaje:\n${form.mensaje}`
    );

    // 👉 Cambia este correo por el del abogado
    const correoDestino = "alan.a.ortega.2003@gmail.com";

    window.location.href = `mailto:${correoDestino}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Contáctanos
          </h2>
          <p className="text-slate-400">
            Agenda tu consulta o envíanos un mensaje.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-slate-800 border border-slate-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-slate-800 border border-slate-700"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-800 border border-slate-700"
            />

            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={form.asunto}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-slate-800 border border-slate-700"
            />
          </div>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}