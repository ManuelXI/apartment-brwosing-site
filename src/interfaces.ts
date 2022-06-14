import { loyalty } from "./enum";
import { Price, Country } from "./types";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: loyalty;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
