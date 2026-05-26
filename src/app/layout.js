import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Open Searchable",
  description: "Open source AI SEO & Visibility Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
      </ThemeProvider>
    </html>
  );
}
