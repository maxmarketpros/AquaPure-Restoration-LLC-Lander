import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AquaPure Restoration | 24/7 Water Damage Restoration in Catawba, NC",
  description:
    "Fast emergency water removal and flood cleanup services in Catawba, NC. With over 20 years of experience, AquaPure Restoration provides free inspections and detailed quotes. Call (828) 568-5570 for 24/7 emergency response.",
  keywords: [
    "water damage restoration Catawba NC",
    "emergency water removal",
    "flood cleanup Catawba",
    "water extraction services",
    "mold remediation",
    "fire damage restoration",
    "storm damage repair",
    "24/7 water damage",
    "AquaPure Restoration",
  ],
  authors: [{ name: "AquaPure Restoration" }],
  creator: "AquaPure Restoration",
  publisher: "AquaPure Restoration",
  formatDetection: {
    telephone: true,
  },
  metadataBase: new URL("https://aquapurerestoration.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AquaPure Restoration | 24/7 Water Damage Restoration in Catawba, NC",
    description:
      "Fast emergency water removal and flood cleanup services when you need them most. Free inspections & detailed quotes. Over 20 years of experience.",
    url: "https://aquapurerestoration.com",
    siteName: "AquaPure Restoration",
    images: [
      {
        url: "/images/3.jpg",
        width: 1200,
        height: 630,
        alt: "Professional water damage restoration services in Catawba, NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaPure Restoration | 24/7 Water Damage Restoration",
    description: "Fast emergency water removal and flood cleanup services. Free inspections. Call (828) 568-5570",
    images: ["/images/3.jpg"],
  },
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
  icons: {
    icon: [
      {
        url: "/images/logo.webp",
        type: "image/webp",
      },
    ],
    apple: "/images/logo.webp",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17747714492" strategy="afterInteractive" />
        <Script id="gtag-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17747714492');
          `}
        </Script>
        <Script id="gtag-phone-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17747714492/5m6NCLaihsQbELzD4o5C', {
              'phone_conversion_number': '(828) 568-5570'
            });
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
