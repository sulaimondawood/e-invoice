import { Playfair_Display, Lato, Besley } from "next/font/google";

export const besley = Besley({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-besley",
});

export const playFair = Playfair_Display({
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const lato = Lato({
  display: "swap",
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});
