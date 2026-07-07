import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en" suppressHydrationWarning className={inter.variable}>

      <body className="antialiased font-sans bg-background text-foreground">

        <QueryProvider>

          <ThemeProvider>

            {children}

            <Toaster richColors />

          </ThemeProvider>

        </QueryProvider>

      </body>

    </html>

  );

}