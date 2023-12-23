import { PropsWithChildren } from "react";

export type AnimateProps = {
  from: CSSProperties;
  to: CSSProperties;
  duration?: number;
};

export type Props = PropsWithChildren<object>;
