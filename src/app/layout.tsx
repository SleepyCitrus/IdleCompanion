import "./globals.css";
import { Inter, Source_Code_Pro } from "next/font/google";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  MantineProvider,
  NavLink,
  rem,
  useMantineTheme,
} from "@mantine/core";
import AppLayout from "./AppLayout";

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

// const mantineTheme = useMantineTheme();

// console.log(mantineTheme.colors.indigo[8]);

const theme = createTheme({
  fontSizes: {
    xs: rem(10),
    sm: rem(16),
    md: rem(18),
    lg: rem(19),
    xl: rem(20),
  },
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Source Code Pro, Monaco, monospace",
  headings: { fontFamily: "Inter, sans-serif", fontWeight: "400" },
  primaryColor: "san-marino",
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
