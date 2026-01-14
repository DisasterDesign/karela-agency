import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";

export const metadata: Metadata = {
  title: "Karela Agency | Food, Hospitality & Motion",
  description: "A high-end creative agency specializing in cinematic storytelling for food, hospitality, and motion.",
  keywords: ["food photography", "hospitality", "motion", "video production", "creative agency"],
  icons: {
    icon: "/logo main.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-karla antialiased">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Header */}
        <MobileHeader />

        {/* Main Content Area */}
        <main className="min-h-screen pt-16 lg:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
