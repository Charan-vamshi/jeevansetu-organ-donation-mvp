export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const hoverLift = {
  whileHover: {
    y: -4,
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const buttonGlow = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0px 0px 20px rgba(132,169,140,0.4)",
    transition: { duration: 0.3 },
  },
};
