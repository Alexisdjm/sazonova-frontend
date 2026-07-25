import { Link } from "react-router-dom";

/**
 * @typedef {{ label: string, to?: string }} BreadcrumbItem
 * @param {{ items: BreadcrumbItem[], className?: string }} props
 */
const Breadcrumbs = ({ items = [], className = "" }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-ubuntu text-xs sm:text-sm text-primary-red/70 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const showLink = Boolean(item.to) && !isLast;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-x-1.5 text-base font-regular text-primary-red">
              {index > 0 && (
                <span className="text-primary-red/40 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {showLink ? (
                <Link
                  to={item.to}
                  className={`transition-colors ${
                    index === 0 ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`${isLast ? "text-primary-red" : ""} ${
                    index === 0 ? "font-medium" : ""
                  }`.trim() || undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
