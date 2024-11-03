import {
  ColorSchemeScript,
  createTheme,
  CSSVariablesResolver,
  MantineProvider,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter, Poppins, Source_Code_Pro } from "next/font/google";
import AppLayout from "../components/layout/AppLayout";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const theme = createTheme({
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(26),
  },
  fontFamily: "Poppins, sans-serif",
  fontFamilyMonospace: "Source Code Pro, Monaco, monospace",
  headings: {
    fontFamily: "Poppins, sans-serif",
    // fontWeight: "600",
    sizes: {
      h4: {
        fontWeight: "600",
      },
    },
  },
  primaryColor: "moody-blue",
  colors: {
    "san-marino": [
      "#FFFFFF",
      "#FFFFFF",
      "#E4E7F6",
      "#C2C8EA",
      "#A0A9DE",
      "#7E8BD2",
      "#5C6CC6",
      "#3F51B5",
      "#36459B",
      "#2D3980",
      "#283373",
    ],
    // "moody-blue": [
    //   "#edf0ff",
    //   "#d9dcfa",
    //   "#b0b7ec",
    //   "#858fdf",
    //   "#616dd4",
    //   "#4a58cd",
    //   "#3d4dcb",
    //   "#2f3eb4",
    //   "#2737a2",
    //   "#1c2f90",
    // ],

    "moody-blue": [
      "#F8F9FD",
      "#EEEFFA",
      "#DADDF5",
      "#C6CAEF",
      "#B2B8EA",
      "#9EA5E4",
      "#8A93DF",
      "#7680D9",
      "#626ED4",
      "#4A58CD",
      "#3E4DCA",
    ],
  },
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-text": theme.colors.gray[2],
  },
  light: {},
  dark: {
    "--mantine-color-text": theme.colors.gray[2],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
