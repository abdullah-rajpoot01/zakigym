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
  title: "Zaki Gym – Best Unisex Fitness Center for Men & Women in Khanewal",
  description:
    "Zaki Gym in Khanewal offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans",
    
  metadataBase: new URL("https://zakigym.pages.dev"),

  openGraph: {
    title: "Zaki Gym – Best Unisex Fitness Center in Khanewal",
    description:
      "Join Zaki Gym in Khanewal for expert training, modern equipment, and separate workout areas for men & women. Start your fitness journey today!",
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
    title: "Zaki Gym – Best Fitness Center in Khanewal",
    description:
      "Modern gym with expert trainers, separate areas for men & women, and affordable plans.",
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
