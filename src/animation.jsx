
export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      when: "beforeChildren",
      staggerChildren: .25,
    }
  }
  ,
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};
export const TitleAnim = {
  hidden: {
    y: 300
  },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  }
};
export const Fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const PhotoAnim = {
  hidden: { scale: 1.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: .75,
    },
  },
};

 export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
