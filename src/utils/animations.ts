export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 5, scale: 1.025 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -5, scale: 1.025 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export const fadeInRight = {
  initial: { opacity: 0, x: -10, scale: 1.025 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: 10, scale: 1.025 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};
