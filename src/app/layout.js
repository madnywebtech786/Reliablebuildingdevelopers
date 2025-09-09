import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Calgary Renovation Experts | On-Time, On-Budget, Permit-Handled",
    template: "%s | Calgary Renovation Pros",
  },
  description:
    "Licensed, insured Calgary renovation company since 2005. We handle permits, design & build for basements, kitchens, bathrooms, flooring & more — built for Alberta’s climate. Free quotes.",
  keywords: [
    "Calgary renovation",
    "basement renovation Calgary",
    "kitchen remodel Calgary",
    "bathroom renovation Calgary",
    "flooring installation Calgary",
    "garage conversion Calgary",
    "legal basement suite Calgary",
    "Alberta renovation contractor",
    "home renovation near me",
    "Calgary renovation company with warranty",
  ],
  authors: [{ name: "Calgary Renovation Pros" }],
  creator: "Calgary Renovation Pros",
  publisher: "Calgary Renovation Pros",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Calgary Renovation Experts | On-Time, On-Budget, Permit-Handled",
    description:
      "Transform your Calgary home with licensed, insured pros. Basements, kitchens, bathrooms, flooring — all built for Alberta weather. Free on-site quotes.",
    url: "https://yourdomain.com",
    siteName: "Calgary Renovation Pros",
    images: [
      {
        url: "https://yourdomain.com/images/og-renovation-calgary.jpg",
        width: 1200,
        height: 630,
        alt: "Calgary Home Renovation Before and After",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Renovation Experts | On-Time, On-Budget, Permit-Handled",
    description:
      "Licensed, insured, and locally trusted since 2005. Get your free renovation quote today.",
    images: ["https://yourdomain.com/images/og-renovation-calgary.jpg"],
    creator: "@YourCalgaryReno",
  },
  category: "Home Renovation",
  applicationName: "Calgary Renovation Pros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
