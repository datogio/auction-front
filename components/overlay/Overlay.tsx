import { ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
}

const Overlay = (props: OverlayProps) => {
  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 blue-glassmorphism">
      {props.children}
    </div>
  );
};

export default Overlay;
