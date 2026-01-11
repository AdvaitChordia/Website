import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { InteractiveGridBackground } from "@/components/InteractiveGridBackground";
import { CustomCursor } from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

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
        <InteractiveGridBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
