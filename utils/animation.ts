export const overlayAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const authAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

export const promptAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.6,
    },
  },
  exit: {
    scale: 0,
  },
};
