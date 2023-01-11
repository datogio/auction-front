import { MouseEventHandler } from 'react';
import { FaTimes } from 'react-icons/fa';

interface CloseOverlayProps {
  onClick: MouseEventHandler<HTMLOrSVGElement>;
}

const CloseOverlay = (props: CloseOverlayProps) => {
  return (
    <div className="flex justify-end p-5">
      <FaTimes {...props} className="text-white text-4xl cursor-pointer" />
    </div>
  );
};

export default CloseOverlay;
