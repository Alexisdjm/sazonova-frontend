import images from '../assets/exporting';
import AnimatedButton from './AnimatedButton';
import { useNavigate } from 'react-router-dom';

const Slide = ({
  children,
  background = 'red-logo',
  image = images.sazonovaLogoRed,
  button = false,
  buttonUrl = '/',
  buttonStyle = 'style1',
  buttonText = 'Ver más',
  buttonPosition = 'bottom-1 left-1/2 -translate-x-1/2',
}) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (!buttonUrl) return;
    if (buttonUrl.startsWith('http://') || buttonUrl.startsWith('https://')) {
      window.location.href = buttonUrl;
    } else {
      navigate(buttonUrl);
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${background === 'red-logo' ? 'bg-primary-red' : 'bg-brand-orange'}`}>
      {background === 'red-logo' && (
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-y-3 py-3 -ml-16">
          {[...Array(35)].map((_, i) => (
            <div key={i} className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? '-translate-x-[62px]' : ''}`}>
              {[...Array(40)].map((_, j) => (
                <img key={j} src={image} className="w-[100px] h-auto object-contain" alt="" />
              ))}
            </div>
          ))}
        </div>
      )}

      {background === 'orange-lines' && (
        <>
          <style>
            {`
              @keyframes slide-stripes {
                0% { background-position: 0 0; }
                100% { background-position: 169.7px 0; }
              }
              .bg-orange-stripes {
                background-image: repeating-linear-gradient(
                  45deg,
                  rgba(228, 126, 26, 0.4),
                  rgba(228, 126, 26, 0.4) 60px,
                  rgba(238, 139, 0, 0.4) 60px,
                  rgba(238, 139, 0, 0.4) 120px
                );
                background-size: 169.7px 169.7px;
                animation: slide-stripes 3s linear infinite;
              }
            `}
          </style>
          <div className="absolute inset-0 z-0 pointer-events-none bg-orange-stripes"></div>
        </>
      )}

      <div className="relative z-10 w-full h-full">
        {children}
        {button && (
          <div className={`absolute ${buttonPosition} z-50`}>
            <AnimatedButton styleKind={buttonStyle} onClick={handleAction}>
              {buttonText}
            </AnimatedButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
