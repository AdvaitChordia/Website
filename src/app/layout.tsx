import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { InteractiveGridBackground } from "@/components/InteractiveGridBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advait Chordia | Mechanical Engineer",
  description:
    "Mechanical Engineering student at the University of Illinois Urbana-Champaign. CAD, FEA, design, and manufacturing.",
  openGraph: {
    title: "Advait Chordia | Mechanical Engineer",
    description:
      "Mechanical Engineering student at UIUC — CAD, FEA, design, and manufacturing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advait Chordia | Mechanical Engineer",
    description:
      "Mechanical Engineering student at UIUC — CAD, FEA, design, and manufacturing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased text-foreground overflow-x-hidden`}
      >
        <Providers>
          <InteractiveGridBackground />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}

