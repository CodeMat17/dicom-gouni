import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dicom.gouni.edu.ng"),
  keywords: [
    "GoUNI",
    "GOUNI",
    "gouni",
    "Education",
    "Academic",
    "competitions",
    "Partnerships",
    "Directorate of Competitions",
    "Godfrey Okoye University",
    "Enugu",
    "Nigeria",
    "DICOM",
    "university competitions",
    "collaboration",
    "student events",
    "academic competitions",
  ],
  title: {
    default: "Directorate of Competitions (DICOM) - GOUNI",
    template: "%s | Directorate of Competitions (DICOM) - GOUNI",
  },
  description:
    "This is the official page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
  verification: {
    google: "1JdJykuzZ8V4A8B0QyhPz7d6U1BZ5uwqpsldRCIadAU",
  },
  openGraph: {
    title: "Directorate of Competitions (DICOM), Godfrey Okoye University, Enugu.",
    description:
      "This is the official page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
    type: "website",
    locale: "en_US",
    url: "https://dicom.gouni.edu.ng/",
    siteName: "DICOM - GOUNI",
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
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
