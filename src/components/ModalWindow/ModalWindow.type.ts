import { ReactNode } from "react";

export type ModalWindowType = {
  children: ReactNode;
  width: number;
  height?: number;
  bgColor?: string;
  borderColor?: string;
};
