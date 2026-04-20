import images from '../assets/exporting';
import { Vector4Icon } from './icons';

const Form = () => {
  return (
    <section className="px-16 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-y-3 py-3 -ml-16">
        {[...Array(35)].map((_, i) => (
          <div key={i} className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? '-translate-x-[62px]' : ''}`}>
            {[...Array(40)].map((_, j) => (
              <img key={j} src={images.sazonovaLetters} className="h-[60px] w-auto opacity-[0.7] object-contain" alt="" />
            ))}
          </div>
        ))}
      </div>

      {/* Fondo Vector */}
      <div className="absolute inset-0 z-[5] pointer-events-none flex justify-center items-center opacity-80">
        <Vector4Icon className="w-full h-auto max-w-none" />
      </div>

      <div className='-mb-1 relative z-20 w-full flex flex-col items-center justify-center'>
        <h3 className="text-brand-orange text-5xl font-semibold text-center letter">Quieres ser parte</h3>
        <h1 className="text-brand-orange text-6xl font-bold text-center">DE NUESTROS</h1>
        <h2 data-text="distribuidores?" className="-my-4 isolate relative text-primary-red font-calling-heart text-8xl font-medium text-center before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_var(--bg-color)]">
          distribuidores?
        </h2>
      </div>

      <div className="bg-brand-orange md:p-16 w-full max-w-4xl relative z-10">
        {/* Contáctanos Badge */}
        <div className="bg-primary-red text-white font-sugo tracking-wider rounded-3xl px-16 py-4 shadow-lg flex items-center justify-center">
          <span className="text-5xl uppercase">Contáctanos</span>
        </div>

        <form className="mt-8 flex flex-col gap-6" action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Nombre de la empresa */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-ubuntu text-sm pl-2">Nombre de la Empresa</label>
              <input
                type="text"
                className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition"
              />
            </div>

            {/* Nombre de Contacto */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-ubuntu text-sm pl-2">Nombre de Contacto</label>
              <input
                type="text"
                className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Correo Electrónico */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-ubuntu text-sm pl-2">Correo Electrónico</label>
              <input
                type="email"
                className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition"
              />
            </div>

            {/* Número Telefónico */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-ubuntu text-sm pl-2">Número Telefónico</label>
              <input
                type="tel"
                className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-ubuntu text-sm pl-2">Dirección</label>
            <input
              type="text"
              className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-ubuntu text-sm pl-2">Información Adicional</label>
            <textarea
              rows="5"
              className="bg-[var(--bg-color)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-red transition w-full resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-red text-white rounded-3xl py-4 mt-6 text-xl transition hover:opacity-90 flex items-center justify-center shadow-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
