import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dicom.gouni.edu.ng"),
  title: {
    default: "DICOM - GOUNI",
    template: "%s | DICOM - GOUNI",
  },
  description:
    "This is the official page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
  openGraph: {
    title: "Directorate of Competitions, Godfrey Okoye University, Enugu, Nigeria",
    description:
      "This is the official page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
    type: "website",
    locale: "en_US",
    url: "https://dicom.gouni.edu.ng/",
    siteName: "DICOM | GOUNI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main> {children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
     
      </body>
    </html>
  );
}
