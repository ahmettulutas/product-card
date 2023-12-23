import React from "react";
import AnimateIn from "./AnimateIn";
import { Props } from "./types";

const FadeIn: React.FC<Props> = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);
const FadeUp: React.FC<Props> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);
const ScaleIn: React.FC<Props> = ({ children }) => (
  <AnimateIn
    from={{ scale: "0", opacity: "0" }}
    to={{ scale: "1", opacity: "1" }}
  >
    {children}
  </AnimateIn>
);
const SlideLeft: React.FC<Props> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(20%)" }}
    to={{ transform: "translateX(0%)" }}
  >
    {children}
  </AnimateIn>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  SlideLeft,
};
