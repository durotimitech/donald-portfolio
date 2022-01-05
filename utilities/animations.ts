
export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = (delayAnimation?: number | 0) => {
  return {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing,
        delay: delayAnimation,
      },
    },
  };
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
