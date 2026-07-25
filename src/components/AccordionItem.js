/**
 * Ítem de acordeón reutilizable.
 * El estado abierto/cerrado lo controla el padre vía props.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {boolean} props.isOpen
 * @param {() => void} props.onToggle
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
const AccordionItem = ({
  title,
  isOpen,
  onToggle,
  children,
  className = "",
}) => (
  <div className={`border-b border-primary-red ${className}`.trim()}>
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 py-4 text-left"
    >
      <span className="font-ubuntu text-base sm:text-lg text-primary-red font-bold">
        {title}
      </span>
      <span
        className="flex-shrink-0 text-xl sm:text-2xl leading-none text-primary-red font-light select-none"
        aria-hidden="true"
      >
        {isOpen ? "−" : "+"}
      </span>
    </button>
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="pb-4 font-ubuntu text-sm sm:text-base text-primary-red/90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AccordionItem;
