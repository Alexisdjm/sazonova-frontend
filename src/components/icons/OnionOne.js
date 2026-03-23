const OnionOne = ({ className = "", color = "#000", width = "24", height = "24", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24" /* ← Ajusta este viewBox al de tu SVG original si es diferente */
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/*
        PEGA AQUÍ EL CONTENIDO DE TU SVG (los <path>, <circle>, etc)
        Recuerda cambiar propiedades como fill-rule a fillRule si las hay.
        Y asegúrate de cambiar los colores fijos a fill="currentColor"
      */}

    </svg>
  );
};

export default OnionOne;
