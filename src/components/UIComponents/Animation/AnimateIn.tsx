import { CSSProperties, PropsWithChildren, useRef } from "react";
import { useIntersection } from "~/utils/hooks";
import { AnimateProps } from "./types";

const AnimateIn: React.FC<PropsWithChildren<AnimateProps>> = ({ from, to, children, duration }) => {

  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useIntersection(ref);

  const defaultStyles: CSSProperties = {
    transition: `${duration ? duration : "600"}ms ease-in-out`
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to
          }
          : {
            ...defaultStyles,
            ...from
          }
      }
    >
      {children}
    </div>
  );
};

export default AnimateIn;
