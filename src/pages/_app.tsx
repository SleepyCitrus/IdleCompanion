import "../app/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Source_Code_Pro } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body>
      <h1>hello there</h1>
      <Component {...pageProps} />
    </body>
  );
}
