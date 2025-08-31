// interfaces/index.ts

// 🎴 Card Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// 🔘 Button Props
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}
