import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Misael | Product Leader",
  description: "AI-powered product strategy and execution. LLM workflows, personalization, matching systems, and rapid iteration.",
  keywords: ["Product Management", "AI Products", "LLM", "Product Strategy", "Tech Leadership"],
  authors: [{ name: "Misael" }],
  openGraph: {
    title: "Misael | Product Leader",
    description: "AI-powered product strategy and execution",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
