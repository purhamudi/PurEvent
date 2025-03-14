import { ReactNode } from "react";
import OrderNow from "../sections/Homepage/OrderNow/OrderNow";

type BackgroundVideoContainerProps = {
  children: ReactNode;
  setDialogIsOpen?: (isOpen: boolean) => void;
};

const BackgroundVideoContainer: React.FC<BackgroundVideoContainerProps> = ({
  children,
  setDialogIsOpen,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Fallback */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fallback.jpg')" }}
      ></div>

      {children}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold uppercase">Catering Excellence</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Experience gourmet food made with passion by top chefs.
        </p>
        {setDialogIsOpen && (
          <OrderNow />
        )}
      </div>
    </div>
  );
};

export default BackgroundVideoContainer;