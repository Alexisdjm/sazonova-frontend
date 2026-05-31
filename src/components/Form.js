import { useState } from "react";
import images from "../assets/exporting";
import { Vector4Icon } from "./icons";
import { buildApiUrl } from "../config/env";
import { validateDistributorForm } from "../utils/formValidation";

const initialForm = {
  company: "",
  contact_name: "",
  email: "",
  phone: "",
  company_address: "",
  message: "",
};

const Form = () => {
  const [form, setForm] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateDistributorForm(form);
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      setFieldErrors(errors);
      setStatus({
        type: "error",
        message: "Revisa los campos marcados antes de enviar.",
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(buildApiUrl("/api/distributors/"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        let errorMessage = "No se pudo enviar el formulario. Intenta de nuevo.";
        try {
          const errorData = await response.json();
          if (typeof errorData === "object" && errorData !== null) {
            const messages = Object.entries(errorData).flatMap(([key, val]) => {
              const label = Array.isArray(val) ? val.join(" ") : String(val);
              return [`${key}: ${label}`];
            });
            if (messages.length) errorMessage = messages.join(" ");
          }
        } catch {
          /* respuesta no JSON */
        }
        throw new Error(errorMessage);
      }

      setForm(initialForm);
      setFieldErrors({});
      setStatus({
        type: "success",
        message: "¡Gracias! Recibimos tu solicitud. Te contactaremos pronto.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Error de conexión con el servidor.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="md:px-16 px-6 pt-20 pb-40 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-y-3 py-3 -ml-16">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? "-translate-x-[62px]" : ""}`}
          >
            {[...Array(40)].map((_, j) => (
              <img
                key={j}
                src={images.sazonovaLetters}
                className="h-[60px] w-auto opacity-[0.7] object-contain"
                alt=""
              />
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:flex absolute inset-0 z-[5] pointer-events-none justify-center items-center opacity-80">
        <Vector4Icon className="md:w-full md:h-auto max-w-none" />
      </div>

      <div className="-mb-1 relative z-20 w-full flex flex-col items-center justify-center">
        <h3 className="text-brand-orange md:text-5xl text-3xl font-semibold text-center letter">
          Quieres ser parte
        </h3>
        <h1 className="text-brand-orange md:text-6xl text-4xl font-bold text-center">
          DE NUESTROS
        </h1>
        <h2
          data-text="distribuidores?"
          className="-my-2 isolate relative text-primary-red font-calling-heart md:text-8xl text-6xl font-medium text-center before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_var(--bg-color)]"
        >
          distribuidores?
        </h2>
      </div>

      <div className="bg-brand-orange md:px-16 px-8 pt-16 pb-32 w-full max-w-4xl relative z-10">
        <div className="bg-primary-red text-white font-sugo tracking-wider rounded-3xl px-16 py-4 shadow-lg flex items-center justify-center">
          <span className="text-5xl uppercase">Contáctanos</span>
        </div>

        <form
          className="mt-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-white font-ubuntu text-sm pl-2"
              >
                Nombre de la Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.company}
                aria-describedby={fieldErrors.company ? "company-error" : undefined}
                className={`bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 transition ${
                  fieldErrors.company
                    ? "ring-2 ring-red-800 focus:ring-red-800"
                    : "focus:ring-primary-red"
                }`}
              />
              {fieldErrors.company && (
                <p id="company-error" className="text-white/95 font-ubuntu text-xs pl-2">
                  {fieldErrors.company}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact_name"
                className="text-white font-ubuntu text-sm pl-2"
              >
                Nombre de Contacto
              </label>
              <input
                id="contact_name"
                name="contact_name"
                type="text"
                autoComplete="name"
                value={form.contact_name}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.contact_name}
                aria-describedby={
                  fieldErrors.contact_name ? "contact_name-error" : undefined
                }
                className={`bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 transition ${
                  fieldErrors.contact_name
                    ? "ring-2 ring-red-800 focus:ring-red-800"
                    : "focus:ring-primary-red"
                }`}
              />
              {fieldErrors.contact_name && (
                <p id="contact_name-error" className="text-white/95 font-ubuntu text-xs pl-2">
                  {fieldErrors.contact_name}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-white font-ubuntu text-sm pl-2"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="text"
                inputMode="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className={`bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 transition ${
                  fieldErrors.email
                    ? "ring-2 ring-red-800 focus:ring-red-800"
                    : "focus:ring-primary-red"
                }`}
              />
              {fieldErrors.email && (
                <p id="email-error" className="text-white/95 font-ubuntu text-xs pl-2">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-white font-ubuntu text-sm pl-2"
              >
                Número Telefónico
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="company_address"
              className="text-white font-ubuntu text-sm pl-2"
            >
              Dirección
            </label>
            <input
              id="company_address"
              name="company_address"
              type="text"
              required
              value={form.company_address}
              onChange={handleChange}
              className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-white font-ubuntu text-sm pl-2"
            >
              Información Adicional
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition w-full resize-none"
            />
          </div>

          {status.message && (
            <p
              role="alert"
              className={`font-ubuntu text-sm text-center px-4 py-3 rounded-xl ${
                status.type === "success"
                  ? "bg-[var(--bg-color)] text-primary-red"
                  : "bg-red-950/40 text-white"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-red text-white rounded-3xl py-4 mt-6 text-xl transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
        <img
          src={images.formBadge}
          alt="form badge"
          className="absolute -bottom-32 -right-8 md:-right-32 md:w-auto max-w-[210px]"
        />
      </div>
    </section>
  );
};

export default Form;
