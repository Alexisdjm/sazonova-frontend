const RainEffect = ({ items = [] }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <style>
        {`
          @keyframes rainFall {
            0% {
              transform: translateY(-300px);
            }
            100% {
              transform: translateY(150vh);
            }
          }
        `}
      </style>
      {items.map((item, index) => (
        <div
          key={index}
          className="absolute top-0"
          style={{
            left: item.positionX,
            animation: `rainFall ${item.duration || 10}s linear infinite`,
            animationDelay: `${item.delay || 0}s`,
            width: item.width || '80px',
            opacity: item.opacity || 1,
            filter: `blur(${item.blur || '0px'})`,
          }}
        >
          <img
            src={item.image}
            alt="rain-drop"
            className="w-full h-auto object-contain"
            style={{ transform: item.rotation ? `rotate(${item.rotation})` : 'none' }}
          />
        </div>
      ))}
    </div>
  );
};

export default RainEffect;
