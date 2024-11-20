import AppLayout from "@/components/layout/AppLayout";
import { TitleProvider } from "@/components/providers/TitleProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TitleProvider>
            <AppLayout>{children}</AppLayout>
          </TitleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
