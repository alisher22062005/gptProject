import { ReactNode } from "react";

export interface Card {
  icon: ReactNode;
  name: string;
  price: string;
  forWhom: string;
  description: string[];
}
