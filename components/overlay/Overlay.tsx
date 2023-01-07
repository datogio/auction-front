import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { overlayAnimation } from '../../utils/animation';

interface OverlayProps {
  children: ReactNode;
}

const Overlay = (props: OverlayProps) => {
  return (
    <motion.div
      {...overlayAnimation}
      className="fixed z-40 top-0 bottom-0 left-0 right-0 blue-glassmorphism"
    >
      {props.children}
    </motion.div>
  );
};

export default Overlay;
