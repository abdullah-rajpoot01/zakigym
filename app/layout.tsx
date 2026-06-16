import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import AOSInit from "@/components/init-aos";
import { DialogBanner } from "@/components/dialog-banner";

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Zaki Gym Khanewal | Best Unisex Fitness Center for Men & Women",
  description:
    "Looking for the best gym in Khanewal? Zaki Gym offers separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

  metadataBase: new URL("https://zakigym.pages.dev"),

  openGraph: {
    title: "Zaki Gym Khanewal | Best Unisex Fitness Center for Men & Women",
    description:
      "Looking for the best gym in Khanewal? Zaki Gym offers separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

    url: "/",
    siteName: "Zaki Gym",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Zaki Gym Fitness Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaki Gym Khanewal | Best Unisex Fitness Center for Men & Women",
    description:
      "Looking for the best gym in Khanewal? Zaki Gym offers separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-serif", playfairDisplay.variable)}
    >
      <body suppressHydrationWarning className="min-h-screen max-w-7xl flex flex-col justify-between relative mx-auto">
        <Navbar />
        <DialogBanner />
        {children}
        <Footer1 />
        <AOSInit />
      </body>
    </html>
  );
}
