/**
 * Inyecta un bloque JSON-LD para SEO (schema.org).
 * @param {{ data: object | object[] | null | undefined }} props
 */
const JsonLd = ({ data }) => {
  if (!data) return null;

  const payload = Array.isArray(data) ? data.filter(Boolean) : data;
  if (Array.isArray(payload) && payload.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
};

export default JsonLd;
