const EMAIL_REGEX =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,24})+$/;

/** Solo letras (incl. acentos), espacios, apóstrofo, guion y punto */
const NAME_REGEX = /^[\p{L}\s'.-]+$/u;

export const validateEmail = (value) => {
  const email = value.trim();
  if (!email) return "El correo electrónico es obligatorio.";
  if (!email.includes("@")) return "El correo debe incluir @ (ejemplo: nombre@empresa.com).";
  if (!EMAIL_REGEX.test(email)) {
    return "Ingresa un correo válido (ejemplo: nombre@empresa.com).";
  }
  const [, domain] = email.split("@");
  const parts = domain.split(".");
  const tld = parts[parts.length - 1];
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return "El dominio del correo no es válido.";
  }
  return "";
};

export const validateCompany = (value) => {
  const name = value.trim();
  if (!name) return "El nombre de la empresa es obligatorio.";
  if (name.length < 2) return "El nombre debe tener al menos 2 caracteres.";
  if (/\d/.test(name)) return "El nombre de la empresa no debe contener números.";
  if (!NAME_REGEX.test(name)) {
    return "Usa solo letras y caracteres válidos (espacios, guiones, apóstrofes).";
  }
  if (!/\p{L}/u.test(name)) return "El nombre debe incluir al menos una letra.";
  return "";
};

export const validateContactName = (value) => {
  const name = value.trim();
  if (!name) return "El nombre de contacto es obligatorio.";
  if (name.length < 2) return "El nombre debe tener al menos 2 caracteres.";
  if (/\d/.test(name)) return "El nombre no debe contener números.";
  if (!NAME_REGEX.test(name)) {
    return "Usa solo letras (sin números ni símbolos raros).";
  }
  if (!/\p{L}/u.test(name)) return "Ingresa un nombre válido.";
  return "";
};

export const validateDistributorForm = (form) => ({
  company: validateCompany(form.company),
  contact_name: validateContactName(form.contact_name),
  email: validateEmail(form.email),
});
